# aws-s3-cloudfront-portfolio
 Static Portfolio hosted on AWS and  globally distributed via CloudFront

# 🚀 Portfolio Website Hosting on AWS S3 + CloudFront

## 📌 Project Overview

This project demonstrates how to deploy and host a professional portfolio website using **Amazon S3** for static website hosting and **Amazon CloudFront** as a global Content Delivery Network (CDN).

The solution provides a highly available, scalable, and cost-effective way to host static websites while delivering content securely over HTTPS from CloudFront edge locations worldwide.

---

## 🏗️ Architecture

Visitor → CloudFront CDN → Amazon S3 Bucket

CloudFront caches website content at global edge locations and serves users from the nearest location, reducing latency and improving performance.

---

## 🔧 AWS Services Used

* Amazon S3

  * Static website hosting
  * Object storage for website files

* Amazon CloudFront

  * Global content delivery network (CDN)
  * HTTPS support
  * Content caching

* AWS IAM / Bucket Policies

  * Public read access configuration
  * Access management and permissions

---

## 🎯 Project Objectives

* Host a static portfolio website on AWS
* Configure S3 static website hosting
* Implement bucket policies for public access
* Deploy CloudFront for global content delivery
* Enable HTTPS access for secure browsing
* Gain hands-on experience with AWS cloud services

---

## 📋 Implementation Steps

### 1. Created Website Files

* Developed portfolio website files
* Configured `index.html` as the landing page

### 2. Created Amazon S3 Bucket

* Created a globally unique S3 bucket
* Configured bucket settings and permissions

### 3. Uploaded Website Content

* Uploaded HTML, CSS, images, and supporting assets

### 4. Enabled Static Website Hosting

* Configured S3 static website hosting
* Set `index.html` as the default root document

### 5. Configured Bucket Policy

* Granted public read access to website objects
* Applied least-privilege access principles

### 6. Deployed CloudFront Distribution

* Connected CloudFront to the S3 origin
* Configured HTTPS redirection
* Set default root object

### 7. Tested and Validated Deployment

* Verified website accessibility
* Confirmed HTTPS functionality
* Tested content delivery through CloudFront

---

## 📈 Key Skills Demonstrated

* Cloud Computing
* AWS S3
* AWS CloudFront
* Static Website Hosting
* Content Delivery Networks (CDN)
* IAM & Bucket Policies
* Web Deployment
* HTTPS Configuration
* AWS Architecture Fundamentals

---

## 🌍 Benefits of This Architecture

✅ Global content delivery

✅ Improved website performance

✅ Secure HTTPS access

✅ Highly scalable solution

✅ Cost-effective hosting model

✅ Industry-standard deployment architecture

---

## 📚 What I Learned

Through this project, I gained practical experience in:

* Hosting production-ready static websites on AWS
* Configuring S3 buckets and permissions
* Understanding CloudFront caching behavior
* Working with AWS security best practices
* Deploying websites using cloud-native services
* Troubleshooting website hosting and CDN issues

---

## 🔗 Future Improvements

* Register a custom domain name
* Configure Route 53 DNS management
* Implement CloudFront Origin Access Control (OAC)
* Add CI/CD deployment using GitHub Actions
* Integrate AWS Certificate Manager (ACM)
* Enhance website monitoring and logging

---

## 👨‍💻 Author

**Dugbatey Bright Dornu**

Aspiring Cloud Engineer | Data Engineer | AI Enthusiast

GitHub: https://github.com/brightcurtis-source

LinkedIn: https://www.linkedin.com/in/bryt-curtis-dev
Life Portfolio: [Cloudfront URL]https://domb8htdena97.cloudfront.net/
---

⭐ If you found this project interesting, feel free to star the repository and connect with me.
