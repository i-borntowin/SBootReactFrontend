package com.mail;

import java.util.Date;
import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

/**
 * A utility class for sending e-mail messages
 * @author www.codejava.net
 *
 */
public class EmailUtility {
    public static void sendEmail(String host, String port,
            final String userName, final String password, String toAddress,
            String subject, String message) throws AddressException,
            MessagingException {
 System.out.println("e1");
        // sets SMTP server properties
        Properties properties = new Properties();
        properties.put("mail.smtp.host",host);
        properties.put("mail.smtp.port", port);
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.starttls.enable", "true");
 
        // creates a new session with an authenticator
		/*
		 * Authenticator auth = new Authenticator() { public PasswordAuthentication
		 * getPasswordAuthentication() { return new PasswordAuthentication(userName,
		 * password); } };
		 */
 
 //       Session session = Session.getInstance(properties, auth);
       
        Session session = Session.getInstance(properties, new Authenticator() {
        	protected PasswordAuthentication getPasswordAuthentication() { 
        	return new PasswordAuthentication(userName, password); 
        	}
        });
        
 
        // creates a new e-mail message
        Message msg = new MimeMessage(session);
        System.out.println("e2");
        msg.setFrom(new InternetAddress(userName));
        System.out.println("e3");
        InternetAddress[] toAddresses = { new InternetAddress(toAddress) };
        msg.setRecipients(Message.RecipientType.TO, toAddresses);
        System.out.println("e4");
        msg.setSubject(subject);
        msg.setSentDate(new Date());
        msg.setText(message);
        System.out.println("e5");
        // sends the e-mail
        Transport.send(msg);
        System.out.println("e6");
    }
}