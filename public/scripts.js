function shareOnFacebook() {
    // Replace 'your-link-here' with the actual link you want to share
    const linkToShare = 'http://localhost:3000/';
    const facebookShareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(linkToShare)}`;
    openShareWindow(facebookShareLink);
}

function shareViaWhatsApp() {
    // Replace 'your-text' with the actual message content
    const messageContent = 'Check out this link: http://localhost:3000/';

    // Construct the WhatsApp link
    const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(messageContent)}`;

    // Open the WhatsApp app with the link
    window.open(whatsappLink, '_blank');
}

function openShareWindow(shareLink) {
    // Open a new window or tab with the share link
    window.open(shareLink, '_blank', 'width=600,height=400');
}

function shareViaViber() {
    // Replace 'your-text' with the actual message content
    const messageContent = 'Check out this link: http://localhost:3000/';

    // Construct the Viber link
    const viberLink = `viber://forward?text=${encodeURIComponent(messageContent)}`;

    // Open the Viber app with the link
    window.open(viberLink, '_blank');
}


function shareViaEmail() {
    // Replace 'your-subject' and 'your-body' with the actual subject and body of the email
    const subject = 'TaxiDrive';
    const body = 'Your email body content.\n\nLink to share: http://localhost:3000/';

    // Construct the mailto link
    const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the default email client with the mailto link
    window.location.href = mailtoLink;
}

function shareViaMessage() {
    // Replace 'your-message' with the actual message content
    const messageContent = 'Check out this link: https://your-link-here.com';

    // Construct the sms link
    const smsLink = `sms:?&body=${encodeURIComponent(messageContent)}`;

    // Open the messaging app with the sms link
    window.location.href = smsLink;
}

function shareOnTwitter() {
    // Replace 'your-link-here' with the actual link you want to share
    const linkToShare = 'https://your-link-here.com';
    const twitterShareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(linkToShare)}`;
    openShareWindow(twitterShareLink);
}