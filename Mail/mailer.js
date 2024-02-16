const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  service: "gmail",
  auth: {
    user: "bloodsaver.techteam@gmail.com",
    pass: "lwgxszxjhudpevjj",
  },
});

// signup send mail

const sending_mail_sign_up = async (email, role, hashedPassword, password) => {
  let url = "https://vishal-sql-db.vercel.app/";

  const info = await transporter.sendMail({
    from: '"Vishal Tandale" <snaphub@gmail.com>', // sender address
    to: `${email} , tandalevishal303@gmail.com`, // list of receivers
    subject: "Welcome", // Subject line
    text: "Welcome to Snaphub.", // plain text body
    html: `<p><b>Hi ${email} ,</b></p>
                <p>Your account has been successfully registered in Vishal DB.</p>
                <p><b>Login Details:</b></p>
                    <ul>
                        <li>Email ID: <b>${email}</b></li>
                        <li>Password: <b>${password}</b></li>
                        <li>HashPassword: <b>${hashedPassword}</b></li>
                        <li>Role: <b>${role}</b></li>
                        
                    </ul>
                <p><b>API Details:</b></p>
                     <ul>
                        <li>Backend API: <a href="${url}">${url}</a></li>
                    </ul>
                <p>Thank you for joining us!</p>`,
  });
};

// forgot password send mailing handle

const sending_mail_forget_password = async (
  old_correct_password,
  hash_password,
  password,
  email
) => {
  let url = "https://vishal-sql-db.vercel.app/";

  const info = await transporter.sendMail({
    from: '"Vishal Tandale" <snaphub@gmail.com>', // sender address
    to: `${email} , tandalevishal303@gmail.com`, // list of receivers
    subject: "Update password", // Subject line
    html: `<p><b>Hi ${email} ,</b></p>
                <p>Your password has been successfully updated.</p>
                <p><b>Password Details:</b></p>
                    <ul>
                        <li>Old Password: <b>${old_correct_password}</b></li>
                        <li>New Password: <b>${password}</b></li>
                        <li>HashPassword: <b>${hash_password}</b></li>
                        
                    </ul>
                <p><b>API Details:</b></p>
                     <ul>
                        <li>Backend API: <a href="${url}">${url}</a></li>
                    </ul>
                <p>Thank you for joining us!</p>`,
  });
};

// cron mail

const cron_mailer = async () => {
  function getCurrentTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedTime;
  }
  const createdAt = getCurrentTime();

  const info = await transporter.sendMail({
    from: '"Vishal Tandale" <snaphub@gmail.com>', // sender address
    to: ` tandalevishal1998@gmail.com
 , tandalevishal303@gmail.com`, // list of receivers
    subject: "Cron Job Testing", // Subject line
    html: `<p><b>
    mail time - ${createdAt}
    </b></p>`,
  });

  console.log("mail send");
};

module.exports = {
  sending_mail_forget_password,
  sending_mail_sign_up,
  cron_mailer,
};
