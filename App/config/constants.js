// this file is storing all global constants in the application - for example all the emial server 
// configuration are stored here.

module.exports = {
    //url: 'https://zippyworld.net/zippy_world_live_api/v1/api/confirm_promo_code',
    //key: '6128892',
    // smtp_host : 'mail.fashcodeconsult.com',
    // smtp_port : '465',
    // sender_email : 'mentor@fashcodeconsult.com',
    // smtp_user : 'mentor@fashcodeconsult.com',
    // smtp_password : 'Fashcode!234'

    smtp_host : process.env.smtp_host,
    smtp_port : process.env.smtp_port,
    sender_email : process.env.sender_email,
    smtp_user : process.env.smtp_user,
    smtp_password : process.env.smtp_password
};