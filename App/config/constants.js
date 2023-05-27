// this file is storing all global constants in the application - for example all the emial server 
// configuration are stored here.

module.exports = {
    //url: 'https://zippyworld.net/zippy_world_live_api/v1/api/confirm_promo_code',
    //key: '2xxxx',
    // smtp_host : 'mail..com',
    // smtp_port : '222',
    // sender_email : 'mentor@com',
    // smtp_user : 'mento@sdfdd.c',
    // smtp_password : 'vvvv'

    smtp_host : process.env.smtp_host,
    smtp_port : process.env.smtp_port,
    sender_email : process.env.sender_email,
    smtp_user : process.env.smtp_user,
    smtp_password : process.env.smtp_password
};