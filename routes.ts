import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  phone: string;
  subject: string;
  message: string;
}

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mobilattuz@gmail.com",
    pass: process.env.EMAIL_PASSWORD // Should be set in environment variables
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submissions
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const { name, phone, subject, message } = req.body as ContactFormData;
      
      // Validate input
      if (!name || !phone || !subject || !message) {
        return res.status(400).json({ error: "All fields are required" });
      }
      
      // Determine subject based on the form selection
      let subjectText = "استفسار جديد من موقع طوز";
      if (subject === "sales") {
        subjectText = "استفسار عن المبيعات";
      } else if (subject === "maintenance") {
        subjectText = "استفسار عن الصيانة";
      } else if (subject === "prices") {
        subjectText = "استفسار عن الأسعار";
      }
      
      // Configure email options
      const mailOptions = {
        from: "mobilattuz@gmail.com",
        to: "mobilattuz@gmail.com",
        subject: subjectText,
        html: `
          <div dir="rtl" style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5; border-radius: 10px;">
            <h2 style="color: #333;">رسالة جديدة من موقع شركة طوز</h2>
            <p><strong>الاسم:</strong> ${name}</p>
            <p><strong>رقم الهاتف:</strong> ${phone}</p>
            <p><strong>الموضوع:</strong> ${subjectText}</p>
            <p><strong>الرسالة:</strong></p>
            <p style="background-color: #fff; padding: 15px; border-radius: 5px; border-right: 4px solid #40E0D0;">${message}</p>
            <p style="color: #666; font-size: 12px; margin-top: 30px;">تم إرسال هذه الرسالة من نموذج الاتصال في موقع شركة طوز</p>
          </div>
        `
      };
      
      // Send the email if email password is set
      if (process.env.EMAIL_PASSWORD) {
        await transporter.sendMail(mailOptions);
      } else {
        console.log("Email would be sent here with this data:", { name, phone, subject, message });
        console.log("To actually send emails, set the EMAIL_PASSWORD environment variable");
      }
      
      // Return success response
      return res.status(200).json({ 
        success: true, 
        message: "Message received successfully" 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ 
        error: "An error occurred while processing your request" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
