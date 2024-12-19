  import { contactFormMailTemplate, forgetPasswordMailTemplate } from "./MailTemplate";
  const nodemailer = require("nodemailer");  
  const createTransporter = () => {
    return nodemailer.createTransport({
      host: "smtp.office365.com",
      port:   587,
      secure: false, 
      auth: {
        user: "hello@techwagger.com",
       pass: "Bond@2024"
      },
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false   
      }
    });
  }; 
const sendMail = async (mailOptions: any) => {
  try {
    const transporter = createTransporter();
    await transporter.sendMail(mailOptions);
    // tslint:disable-next-line:no-console
    console.log("Email sent successfully to", mailOptions.to);
  } catch (error: any) {
    // tslint:disable-next-line:no-console
    console.error("Error sending email to", mailOptions.to, ":", error.message);
    throw new Error("Failed to send email");
  }
};

export const sendEmail = async (to: any, subject: any, text: any, hyperText: any) => { 
  try {
    const htmlContent = forgetPasswordMailTemplate({
      subject: subject || "Reset Password",
      text: text,
      hyperText: hyperText || "https://mvm.techwagger.com"
    });

    const mailOptions = {
      from: "hello@techwagger.com",  
      to: to,  
      subject: subject, 
      html: htmlContent  
    };

    await sendMail(mailOptions);
  } catch (error: any) {
    // tslint:disable-next-line:no-console
    console.error("Error in sendEmail function:", error.message);
    throw new Error("Failed to send password reset email");
  }
};
 
export const sendContactFormEmail = async (name: any, email: any, phone: any, message: any, subject: any) => {
  try {
    const htmlContent = contactFormMailTemplate({
      name: name,
      email: email,
      phone: phone,
      message: message,
      subject: subject
    });

    const mailOptions = {
        from: "hello@techwagger.com",  
      to: "amit.chauhan@techwagger.com", // Recipient email from environment variable
      subject: subject, // Email subject
      html: htmlContent // Email content in HTML
    };

    await sendMail(mailOptions);
  } catch (error: any) {
    // tslint:disable-next-line:no-console
    console.error("Error in sendContactFormEmail function:", error.message);
    throw new Error("Failed to send contact form email");
  }
};

///// er3233333333333333333333333######################################################
// import { contactFormMailTemplate, forgetPasswordMailTemplate } from "./MailTemplate";
// const nodemailer = require("nodemailer"); 

// export const sendEmail = async (to: any, subject: any, text: any, hyperText: any) => { 
//   try {
//     const htmlContent = forgetPasswordMailTemplate({
//       subject: "Reset Password",
//       text: text,
//       hyperText: hyperText || "https://mvm.techwagger.com"
//     });

//     // const transporter = nodemailer.createTransport({
//     //   host: process.env.MAIL_HOST,
//     //   port: Number(process.env.MAIL_PORT),
//     //   secure: false,
//     //   auth: {
//     //     user: process.env.MAIL_USERNAME,
//     //     pass: process.env.MAIL_PASSWORD
//     //   },
//     //   tls: {
//     //     ciphers: 'SSLv3',
//     //     rejectUnauthorized: false
//     //   }
//     // });
//     const transporter = nodemailer.createTransport({
//       host: "smtp.office365.com",
//       port: 587,
//       secure: false,
//       auth: {
//         user: "hello@techwagger.com",
//         pass: "Bond@2024"
//       },
//       tls: {
//         ciphers: "SSLv3",
//         rejectUnauthorized: false
//       }
//     });
//     const mailOptions = {
//       from:"hello@techwagger.com",   // process.env.MAIL_USERNAME,
//       to: to,
//       subject: subject,
//       html: htmlContent
//     };

//     await transporter.sendMail(mailOptions);
//     // tslint:disable-next-line:no-console
//     console.log("Email sent successfully");
//   } catch (error) {
//     // tslint:disable-next-line:no-console
//     console.error("Error sending email:", error);
//     throw new Error("Failed to send email");
//   }
// };
 
// export const sendContactFormEmail = async (  name:any, email:any, phone:any, message:any, subject:any) => {
//   try {
//     const htmlContent = contactFormMailTemplate({
//       name: name,
//       email: email,
//       phone: phone,
//       message: message,
//       subject: subject
//     });
//      const to="hello@techwagger.com";
//     const transporter = nodemailer.createTransport({
//       host: "smtp.office365.com",
//       port: 587,
//       secure: false,
//       auth: {
//         user: "hello@techwagger.com",
//         pass: "Bond@2024"
//       },
//       tls: {
//         ciphers: "SSLv3",
//         rejectUnauthorized: false
//       }
//     });

//     const mailOptions = {
//       from: "hello@techwagger.com",  // Sender email
//       to: to, // Recipient email
//       subject: subject, // Email subject
//       html: htmlContent // Email content in HTML
//     };

//     await transporter.sendMail(mailOptions);
//     console.log("Contact form email sent successfully");
//   } catch (error) {
//     console.error("Error sending contact form email:", error);
//     throw new Error("Failed to send contact form email");
//   }
// }; 