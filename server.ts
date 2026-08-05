import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'JD Imaging Corp. API', timestamp: new Date().toISOString() });
  });

  // Quote / Service Request Endpoint
  app.post('/api/quote', (req, res) => {
    const { contactName, companyName, email, phone, region, requestType, details } = req.body;
    const referenceNumber = `JDI-${Math.floor(100000 + Math.random() * 900000)}`;
    
    console.log(`[Quote Received] Ref: ${referenceNumber}, Name: ${contactName}, Company: ${companyName}, Type: ${requestType}`);

    res.json({
      success: true,
      referenceNumber,
      message: `Service request received for ${companyName || contactName}. A regional technician from Mundelein, IL will contact you shortly.`,
      receivedData: { contactName, companyName, email, phone, region, requestType }
    });
  });

  // Emergency Remote Support Ticket
  app.post('/api/support-ticket', (req, res) => {
    const { clientName, facility, urgency, systemType, issueDescription } = req.body;
    const ticketId = `SUP-${Math.floor(1000 + Math.random() * 9000)}`;
    
    res.json({
      success: true,
      ticketId,
      status: 'Tech Assigned',
      estimatedWaitMinutes: urgency === 'Critical / Emergency' ? 10 : 30,
      instructions: 'Please ensure your workstation is powered on with TeamViewer or AnyDesk ready.',
      data: { clientName, facility, urgency, systemType, issueDescription }
    });
  });

  // Fuji CR Repair Diagnostics
  app.post('/api/fuji-diagnose', (req, res) => {
    const { model, symptomId } = req.body;
    res.json({
      success: true,
      recommendation: 'On-site Optical Calibration / Mail-in Board Swap available from Mundelein facility.',
      estimatedSavingsPct: '65% to 80% versus buying new equipment',
      contactPhone: '(847) 367-5920'
    });
  });

  // Payment Simulation Endpoint
  app.post('/api/payment-simulate', (req, res) => {
    const { accountNumber, invoiceNumber, clientName, amount, paymentMethod } = req.body;
    const receiptNumber = `REC-${Math.floor(100000 + Math.random() * 900000)}`;

    res.json({
      success: true,
      receiptNumber,
      transactionDate: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      accountNumber,
      invoiceNumber,
      clientName,
      amount,
      paymentMethod,
      status: 'Paid / Approved',
      billingContact: '(847) 367-5920 | jdicorp@gmail.com'
    });
  });

  // Vite integration
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`JD Imaging Corp server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
