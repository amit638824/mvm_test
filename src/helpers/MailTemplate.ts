export const  forgetPasswordMailTemplate = ({ subject, text, hyperText }: any) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <title>${subject}</title>
        <style>
            .x_831786570darkmode { background: rgb(255, 255, 255); }
            .x_831786570w-100p { width: 100%; }
            .x_831786570pb-60 { padding-bottom: 60px; }
            .x_831786570pt-60 { padding-top: 60px; }
            .x_831786570btn-white2 { background-color: #ffffff; font-weight: bold; color: #6366f0; border: 3px solid #6366f0; border-radius: 5px; }
            .x_831786570link { text-decoration: none; color: #6366f0; }
        </style>
    </head>
    <body>
        <table align="center" class="x_831786570darkmode x_831786570gmail-fix" width="100%" style="background: rgb(255, 255, 255); min-width: 320px" cellspacing="0" cellpadding="0">
            <tbody>
                <tr>
                    <td>
                        <table class="x_831786570w-100p x_831786570darkmode" width="650" align="center" style="max-width: 650px; margin: 0 auto" cellpadding="0" cellspacing="0">
                            <tbody>
                                <tr>
                                    <td align="left" class="x_831786570pb-32 x_831786570darkmode" style="padding: 28px 24px 24px">
                                        <a style="text-decoration: none" href="#" target="_blank">
                                            <img class="x_831786570light-img" width="150" style="width: 150px; max-width: 150px; background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); text-align: center" alt="Motor Vehicle Monitoring" src="https://mvm.techwagger.com/email-template/mvm-logo-email.png">
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="x_831786570pb-60 x_831786570darkmode" style="padding: 0 10px 60px">
                                        <table align="center" class="x_831786570w-100p x_831786570darkmode" width="550" style="max-width: 550px; margin: 0 auto" cellpadding="0" cellspacing="0">
                                            <tbody>
                                                <tr>
                                                    <td align="center" class="x_831786570darkmode" style="font-size: 24px; font-family: Arial, sans-serif; color: rgb(0, 0, 0); padding: 30px 20px 30px; text-align: center">
                                                        <p style="font-size: 24px; color: rgb(0, 0, 0); margin: 0;"><strong>${text}</strong></p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="x_831786570pb-60 x_831786570darkmode" align="center" style="padding: 20px 0 60px">
                                                        <table align="center" style="margin: 0 auto" cellpadding="0" cellspacing="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td class="x_831786570btn-white2" align="center">
                                                                        <a class="x_831786570link" style="padding: 12px 27px; display: block" href="${hyperText}" target="_blank">Reset your password</a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center" class="x_831786570darkmode" style="font-size: 14px; line-height: 18px; font-family: Arial, sans-serif; color: rgb(0, 0, 0); padding: 0px 20px 0px; text-align: center">
                                                        <p style="font-size: 14px; line-height: 24px; color: #000; margin: 0; text-align: center">
                                                            If you do not want to change your password or didn't request a reset, you can ignore and delete this email.
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <table class="x_831786570w-100p x_831786570darkmode" width="540" align="center" style="max-width: 540px; margin: 0 auto" cellpadding="0" cellspacing="0">
                                            <tbody>
                                                <tr>
                                                    <td class="x_831786570pt-60 x_831786570darkmode" align="center" style="border-top: 1px solid rgb(222, 222, 222); color: rgb(165, 165, 165); font-size: 14px; line-height: 18px; font-family: Arial, sans-serif; padding: 60px 24px 32px">
                                                        The AMIE Integrated Online Processing Specification provides the technical specifications for interfacing with the National Motor Vehicle Title Information System (NMVTIS) in online mode.
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </body>
    </html>
    `;
  }; 
  
  export const  contactFormMailTemplate = ({ name, email, phone, message, subject }: any) => {
      return `
      <!DOCTYPE html>
      <html>
      <head>
          <title>${subject}</title>
          <style>
              .x_831786570darkmode { background: rgb(255, 255, 255); }
              .x_831786570w-100p { width: 100%; }
              .x_831786570pb-60 { padding-bottom: 60px; }
              .x_831786570pt-60 { padding-top: 60px; }
              .x_831786570content { font-family: Arial, sans-serif; color: #000; font-size: 16px; line-height: 24px; }
              .x_831786570heading { font-size: 24px; font-weight: bold; color: #6366f0; text-align: center; }
              .x_831786570label { font-weight: bold; color: #6366f0; }
          </style>
      </head>
      <body>
          <table align="center" class="x_831786570darkmode" width="100%" style="background: rgb(255, 255, 255); min-width: 320px" cellspacing="0" cellpadding="0">
              <tbody>
                  <tr>
                      <td>
                          <table class="x_831786570w-100p" width="650" align="center" style="max-width: 650px; margin: 0 auto" cellpadding="0" cellspacing="0">
                              <tbody>
                                  <tr>
                                      <td align="center" class="x_831786570pb-32" style="padding: 28px 24px 24px">
                                          <img width="150" style="width: 150px; max-width: 150px;" alt="Company Logo" src="https://mvm.techwagger.com/email-template/mvm-logo-email.png">
                                      </td>
                                  </tr> 
                                  <tr>
                                      <td class="x_831786570pb-60" style="padding: 20px 30px">
                                          <table align="center" class="x_831786570content" width="100%" cellpadding="0" cellspacing="0">
                                              <tbody>
                                                  <tr>
                                                      <td><span style="min-width:120px; display:inline-block">Name</span>: ${name}</td>
                                                  </tr>
                                                  <tr>
                                                      <td><span style="min-width:120px; display:inline-block">Email</span>: ${email}</td>
                                                  </tr>
                                                  <tr>
                                                      <td><span style="min-width:120px; display:inline-block">Phone</span>: ${phone}</td>
                                                  </tr>
                                                  <tr>
                                                      <td><span style="min-width:120px; display:inline-block">Subject</span>: ${subject}</td>
                                                  </tr>
                                                  <tr>
                                                      <td><span style="min-width:120px; display:inline-block">Message:</span></td>
                                                  </tr>
                                                  <tr>
                                                      <td style="padding: 10px 0;">${message}</td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td align="center" style="border-top: 1px solid rgb(222, 222, 222); color: rgb(165, 165, 165); font-size: 14px; line-height: 18px; padding: 60px 24px 32px">
                                          This message was sent from https://mvm.techwagger.com/contact.
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </td>
                  </tr>
              </tbody>
          </table>
      </body>
      </html>
      `;
    };