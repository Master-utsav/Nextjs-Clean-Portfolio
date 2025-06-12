
export function gmailLink(){
    const email = process.env.NEXT_PUBLIC_GMAIL!;
      const subject = "Message for Master Utsav";
      const body = "Hello, I'm interested in your services.";
      const encodedSubject = encodeURIComponent(subject);
      const encodedBody = encodeURIComponent(body);
      const gmailLink = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
      return gmailLink;
}

export function resumeLink(){
    return "/utsav_jaiswal_resume_hard_copy.pdf"
}

export function pptLink(){
    return "/Presentation1.pptx"
}