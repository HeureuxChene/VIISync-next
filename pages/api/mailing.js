import nodemailer from 'nodemailer';

export default async (req, res) => {

    console.log('test')

    // const body = req.body;

    // let transporter = nodemailer.createTransport({
    //     host: process.env.SENDER_SMTP,
    //     port: 465,
    //     secure: true,
    //     true for 465, false for other ports
    //     auth: {
    //         user: process.env.SENDER_USER,
    //         pass: process.env.SENDER_PASSWORD,
    //     },
    // });

    // const options = {
    //     from: `${body.surname} ${body.name} <${body.mail}>`,
    //     to: process.env.DESTINATION_ADDRESS,
    //     subject: "ECOCHAR - Formulaire",
    //     html: `Bonjour Fabrice,<br> un utilisateur viens de remplir le formulaire sur votre site ECOCHAR.<br>
    //     Voici un récapitulatif de ses informations personnelles :<br><br>
    //     Nom: ${body.surname}<br>
    //     Prénom: ${body.name}<br>
    //     Mail: ${body.mail}<br>
    //     message: ${body.message === '' ? ' Aucun message' : body.message}<br>`
    // }

    // send mail with defined transport object
    // transporter.sendMail(options, (err, info) => {
    //     if (err) {
    //         console.log(err);
    //         res.status(500)
    //         return
    //     }
    //     console.log("Message sent: ", info.response);
    //     res.status(200).json(req.body);
    // })
}