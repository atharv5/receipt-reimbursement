import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { writeFile } from 'fs/promises';
import path from 'path';
import { mkdir } from 'fs/promises';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const date = formData.get('date') as string;
    const amount = formData.get('amount') as string;
    const description = formData.get('description') as string;
    const receipt = formData.get('receipt') as File;

    if (!date || !amount || !description || !receipt) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create uploads directory if it doesn't exist
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (error) {
      console.error('Error creating upload directory:', error);
    }

    // Generate a unique filename
    const timestamp = Date.now();
    const fileExtension = receipt.name.split('.').pop();
    const filename = `receipt-${timestamp}.${fileExtension}`;
    const filePath = path.join('uploads', filename);
    const fullPath = path.join(process.cwd(), 'public', filePath);

    // Convert file to buffer and save it
    const bytes = await receipt.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(fullPath, buffer);

    // Save reimbursement data to database
    const reimbursement = await prisma.reimbursement.create({
      data: {
        date: new Date(date),
        amount: parseFloat(amount),
        description,
        receiptFile: `/uploads/${filename}`,
      },
    });

    return NextResponse.json(reimbursement, { status: 201 });
  } catch (error) {
    console.error('Error processing reimbursement submission:', error);
    return NextResponse.json(
      { error: 'Error processing reimbursement submission' },
      { status: 500 }
    );
  }
} 