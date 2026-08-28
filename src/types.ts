export interface Program {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  eligibility: string;
  features: string[];
  iconName: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  image: string;
  bio: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: string;
  url: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  message: string;
}

export interface AdmissionFormData {
  studentName: string;
  fatherName: string;
  phone: string;
  email: string;
  program: string;
  previousMarks: string;
  address: string;
}
