var nodemailer=require('nodemailer');
var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'arasavillikusuma756@gmail.com',
        pass:'opqatnypozifhcpf',
    }

    });
    var mailOptions={
        from:'arasavillikusuma756@gmail.com',
        to:'pravin.consensus@gmail.com',
        subject:'sending mail from 20A21A0510',
        text:'TASK3',
    }
    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log('error');
        }
        else{
            console.log('email sent :'+info.response);
        }
    })