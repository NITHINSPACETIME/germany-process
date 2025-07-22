import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { 
  GraduationCap, 
  FileText, 
  CreditCard, 
  Plane, 
  Users, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Euro, 
  Languages, 
  BookOpen,
  MapPin,
  Calendar,
  Target,
  TrendingUp,
  Building2,
  User,
  Globe,
  Award,
  Info
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend } from 'recharts';
import { CitationLink } from '@/components/ui/citation';

const citations = {
  1: {
    title: "Germany Study Visa for Students from India - Complete Guide",
    url: "https://planforgermany.com/germany-study-visa-for-students-from-india-complete-guide/",
    content: "Comprehensive guide covering visa requirements, documents, and application procedures for Indian students",
    date: "2024",
    siteName: "Plan for Germany",
    sourceContent: "Indian students constitute a significant portion of international students in Germany, attracted by high-ranking universities and promising job opportunities."
  },
  2: {
    title: "Applying for a Germany Student Visa From India",
    url: "https://www.germany-visa.org/student-visa/student-visa-visum-zu-studienzwecken/india/",
    content: "Detailed information about German student visa application process and requirements",
    date: "2024",
    siteName: "Germany-Visa.org",
    sourceContent: "To study in Germany, Indian nationals must apply for a National Visa (D Visa), which allows entry and subsequent application for a residence permit."
  },
  3: {
    title: "Germany Student Visa Checklist and Requirements",
    url: "https://www.gisma.com/blog/germany-student-visa-checklist-and-requirements-a-step-by-step-guide-for-international-students",
    content: "Step-by-step guide for international students applying for German student visa",
    date: "2024",
    siteName: "Gisma",
    sourceContent: "Students can work up to 120 full days or 240 half days per year with a student visa."
  },
  4: {
    title: "Reddit Discussion: B.Tech Transfer to Germany",
    url: "https://www.reddit.com/r/Indians_StudyAbroad/comments/16cd5px/guidance_required_to_know_what_are_the_steps_to/",
    content: "Student forum discussion about transferring after first year B.Tech",
    date: "2024",
    siteName: "Reddit",
    sourceContent: "Students currently in their first year of a Bachelor of Technology program in India are exploring options to transfer to Germany."
  },
  5: {
    title: "Understand Anabin Database for Smooth Admission",
    url: "https://www.msingermany.co.in/blog/guide-anabin-database",
    content: "Guide to using Anabin database for degree recognition in Germany",
    date: "2024",
    siteName: "MS in Germany",
    sourceContent: "The Anabin database is Germany's official tool for evaluating and recognizing foreign qualifications."
  },
  6: {
    title: "Study in Germany: A Guide for International Students",
    url: "https://www.applymoon.com/blog/study-in-germany-for-international-students",
    content: "Comprehensive guide covering eligibility, costs, and application procedures",
    date: "2024",
    siteName: "Applymoon",
    sourceContent: "German universities are competitive. Expect high academic requirements: Often around 90% in previous qualifications for undergraduate programs."
  },
  7: {
    title: "Common Mistakes to Avoid When Applying to German Public Universities",
    url: "https://www.shiksha.com/studyabroad/common-mistakes-indian-students-make-while-applying-to-public-universities-in-germany-articlepage-93591",
    content: "Guide highlighting common pitfalls in German university applications",
    date: "2024",
    siteName: "Shiksha",
    sourceContent: "German public universities typically require 16 years of education. As many Indian Bachelor's programs are 3 years long, students might only have 15 years of education upon completion."
  }
};

const imageResources = {
  gismaHeader: "https://www.gisma.com/_next/static/media/hero-default.44149387.webp",
  gismaBody: "https://www.gisma.com/uploads/sites/5/2025/07/blake-guidry-jXxdtXFEjcc-unsplash-scaled.jpg?w=1024",
  germanyVisaLogo: "https://www.germany-visa.org/wp-content/uploads/2022/08/Germany-Visa-Logo.svg",
  anabinGuide: "https://usenotioncms.com/proxy-prod/block/14d788ba-6fbf-80bf-be4d-ded7a6111aa0/f8f9f4d3-d92f-4d34-91d4-0b9996c3a8ed/7a3376ce-fc37-4f83-a8de-06d3d2be7f72/german_university_application.jpg",
  applymoonGuide: "https://www.applymoon.com/upload/blog/6dac45b34bcf2a48d83406c0dc.jpg"
};

const GermanyTransferReport = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Data for charts
  const eligibilityData = [
    { criteria: 'Academic Score', requirement: '90%', category: 'Undergraduate' },
    { criteria: 'Education Years', requirement: '16 years', category: 'General' },
    { criteria: 'Language (German)', requirement: 'C1', category: 'German Programs' },
    { criteria: 'Language (English)', requirement: 'IELTS 6.5+', category: 'English Programs' }
  ];

  const costsData = [
    { category: 'Accommodation', amount: 500, color: '#8884d8' },
    { category: 'Food', amount: 200, color: '#82ca9d' },
    { category: 'Health Insurance', amount: 105, color: '#ffc658' },
    { category: 'Miscellaneous', amount: 150, color: '#ff7300' },
    { category: 'Study Materials', amount: 50, color: '#00ff00' }
  ];

  const timelineData = [
    { month: 'Month 1-2', activity: 'Research & University Selection', status: 'Planning' },
    { month: 'Month 3-4', activity: 'Document Preparation & APS', status: 'Preparation' },
    { month: 'Month 5-6', activity: 'Application Submission', status: 'Application' },
    { month: 'Month 7-8', activity: 'University Response & Visa', status: 'Processing' },
    { month: 'Month 9', activity: 'Travel & Enrollment', status: 'Completion' }
  ];

  const visaProcessData = [
    { step: 'Blocked Account', duration: '1-3 weeks', importance: 'Critical' },
    { step: 'Document Collection', duration: '2-4 weeks', importance: 'High' },
    { step: 'Visa Appointment', duration: '1-10 weeks', importance: 'Critical' },
    { step: 'Visa Processing', duration: '2-12 weeks', importance: 'Critical' }
  ];

  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
        activeTab === id 
          ? 'bg-blue-600 text-white' 
          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
      }`}
    >
      <Icon size={16} />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6 p-4">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
        <div className="flex items-center gap-4 mb-4">
          <GraduationCap size={48} />
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Transferring to German Universities</h1>
            <p className="text-lg opacity-90">Complete Guide for Indian Students After First Year</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold">16</div>
            <div className="text-sm opacity-80">Years Education Required</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">€1,000</div>
            <div className="text-sm opacity-80">Monthly Living Cost</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">90%</div>
            <div className="text-sm opacity-80">Academic Score Needed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">9</div>
            <div className="text-sm opacity-80">Months Process Time</div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 p-2 bg-gray-50 rounded-lg">
        <TabButton id="overview" label="Overview" icon={Info} />
        <TabButton id="eligibility" label="Eligibility" icon={CheckCircle} />
        <TabButton id="documents" label="Documents" icon={FileText} />
        <TabButton id="application" label="Application" icon={Target} />
        <TabButton id="visa" label="Visa Process" icon={Plane} />
        <TabButton id="costs" label="Costs" icon={Euro} />
        <TabButton id="experiences" label="Experiences" icon={Users} />
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Key Pathways */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="text-blue-600" />
                Transfer Pathways Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Direct Transfer Path</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-600 mt-0.5" />
                      Complete 1 year of Bachelor's in India <CitationLink id="6" callType="quote" citations={citations}/>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-600 mt-0.5" />
                      Meet 16-year education requirement <CitationLink id="7" callType="quote" citations={citations}/>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-600 mt-0.5" />
                      Apply directly to German universities
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">JEE Advanced Route</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Award size={16} className="text-blue-600 mt-0.5" />
                      JEE Advanced qualification bypasses Studienkolleg <CitationLink id="4" callType="quote" citations={citations}/>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award size={16} className="text-blue-600 mt-0.5" />
                      Direct entry to technical programs
                    </li>
                    <li className="flex items-start gap-2">
                      <Award size={16} className="text-blue-600 mt-0.5" />
                      JEE scores valid for one year
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Process Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="text-purple-600" />
                Transfer Process Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {timelineData.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="w-20 text-sm font-medium text-center">
                      {item.month}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{item.activity}</div>
                      <div className="text-sm text-gray-600">{item.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Critical Requirements Alert */}
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Critical Requirements</AlertTitle>
            <AlertDescription>
              <div className="mt-2 space-y-1">
                <div>• <strong>16 Years Education:</strong> Most German public universities require 16 years of education <CitationLink id="7" callType="quote" citations={citations}/></div>
                <div>• <strong>University Recognition:</strong> Your Indian university must have H+ status in Anabin database <CitationLink id="5" callType="quote" citations={citations}/></div>
                <div>• <strong>Academic Performance:</strong> Minimum 90% for competitive undergraduate programs <CitationLink id="6" callType="quote" citations={citations}/></div>
              </div>
            </AlertDescription>
          </Alert>
        </div>
      )}

      {activeTab === 'eligibility' && (
        <div className="space-y-6">
          {/* Eligibility Criteria */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="text-green-600" />
                Eligibility Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-4">Academic Requirements</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="font-medium">Undergraduate Programs</div>
                      <div className="text-sm text-gray-600">90% in previous qualifications <CitationLink id="6" callType="quote" citations={citations}/></div>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="font-medium">General Courses</div>
                      <div className="text-sm text-gray-600">Minimum 75% required</div>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <div className="font-medium">Popular Engineering</div>
                      <div className="text-sm text-gray-600">85% and above (Mechanical, Automotive) <CitationLink id="6" callType="quote" citations={citations}/></div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Education Duration</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                      <div className="font-medium text-red-800">16 Years Required</div>
                      <div className="text-sm text-red-600">German public universities require 16 years of education <CitationLink id="7" callType="quote" citations={citations}/></div>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded-lg">
                      <div className="font-medium">Indian 3-Year Bachelor's</div>
                      <div className="text-sm text-gray-600">Only provides 15 years - may need additional qualification</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Anabin Database Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="text-blue-600" />
                University Recognition (Anabin Database)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="font-semibold text-green-800">H+ Status</div>
                  <div className="text-sm text-green-700 mt-1">University fully recognized</div>
                  <div className="text-xs text-green-600 mt-2">✓ Direct admission possible</div>
                </div>
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="font-semibold text-yellow-800">H+/- Status</div>
                  <div className="text-sm text-yellow-700 mt-1">Partial recognition</div>
                  <div className="text-xs text-yellow-600 mt-2">Case-by-case evaluation</div>
                </div>
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="font-semibold text-red-800">H- Status</div>
                  <div className="text-sm text-red-700 mt-1">Not recognized</div>
                  <div className="text-xs text-red-600 mt-2">✗ Not accepted</div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                The Anabin database is Germany's official tool for evaluating foreign qualifications. 
                Your Indian university must have H+ status for straightforward admission <CitationLink id="5" callType="quote" citations={citations}/>
              </p>
              <img src={imageResources.anabinGuide} alt="Anabin Database Guide" className="mt-4 rounded-lg w-full max-w-md mx-auto" />
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === 'documents' && (
        <div className="space-y-6">
          {/* Document Checklist */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="text-blue-600" />
                Required Documents Checklist
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-4">Academic Documents</h3>
                  <div className="space-y-2">
                    {[
                      'Academic transcripts from first year',
                      'High school certificates',
                      'Curriculum Vitae (CV)',
                      'Statement of Purpose (SOP)',
                      'Letters of Recommendation (2-3)',
                      'Thesis submission (for engineering)'
                    ].map((doc, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-600" />
                        <span className="text-sm">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Legal & Identity</h3>
                  <div className="space-y-2">
                    {[
                      'Valid passport (6+ months validity)',
                      'Passport photos (3 biometric)',
                      'Language proficiency certificates',
                      'APS certificate (mandatory)',
                      'Proof of financial means',
                      'Health insurance proof'
                    ].map((doc, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-blue-600" />
                        <span className="text-sm">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <CitationLink id="6" callType="quote" citations={citations} className="text-sm text-gray-500 mt-4"/>
            </CardContent>
          </Card>

          {/* APS Certificate Process */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="text-purple-600" />
                APS Certificate Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Alert className="mb-4">
                <Info className="h-4 w-4" />
                <AlertTitle>Critical Requirement</AlertTitle>
                <AlertDescription>
                  APS Certificate is mandatory for Indian students before applying for student visa <CitationLink id="2" callType="quote" citations={citations}/>
                </AlertDescription>
              </Alert>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">For JEE Qualified Students</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• TestAS exemption for JEE Main + Advanced <CitationLink id="4" callType="quote" citations={citations}/></li>
                    <li>• Direct APS application possible</li>
                    <li>• Faster processing time</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">General Requirements</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Check official APS India website</li>
                    <li>• First-year grades may be required</li>
                    <li>• TestAS score for non-JEE students</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Language Requirements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Languages className="text-green-600" />
                Language Proficiency Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-3">German-Taught Programs</h4>
                  <div className="space-y-2 text-sm">
                    <div>• <strong>TestDaF:</strong> Level 4 in all sections</div>
                    <div>• <strong>DSH:</strong> Level 2 or 3</div>
                    <div>• <strong>Goethe Institute:</strong> C1 level</div>
                    <div>• <strong>Example:</strong> C1 required for TU Berlin CS <CitationLink id="4" callType="quote" citations={citations}/></div>
                  </div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-3">English-Taught Programs</h4>
                  <div className="space-y-2 text-sm">
                    <div>• <strong>IELTS:</strong> Minimum 6.5 overall</div>
                    <div>• <strong>TOEFL:</strong> Minimum 90-100</div>
                    <div>• <strong>PTE:</strong> Accepted by many universities</div>
                    <div>• <strong>Note:</strong> Basic German (A1/A2) may still be required <CitationLink id="6" callType="quote" citations={citations}/></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === 'application' && (
        <div className="space-y-6">
          {/* Application Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="text-blue-600" />
                Application Deadlines & Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Winter Semester (October Start)</h4>
                  <div className="text-sm space-y-1">
                    <div>• Application Period: May 15 - July 15</div>
                    <div>• Most popular intake</div>
                    <div>• Higher competition</div>
                  </div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Summer Semester (April Start)</h4>
                  <div className="text-sm space-y-1">
                    <div>• Application Period: Dec 1 - Jan 15</div>
                    <div>• Limited programs available</div>
                    <div>• Less competition</div>
                  </div>
                </div>
              </div>
              <Alert>
                <Clock className="h-4 w-4" />
                <AlertTitle>Early Application Recommended</AlertTitle>
                <AlertDescription>
                  Universities work on first-come, first-served basis. Seats can fill before official deadlines <CitationLink id="6" callType="quote" citations={citations}/>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Application Platforms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="text-purple-600" />
                Application Platforms & Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">UniAssist Platform</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Centralized application system</li>
                    <li>• Used by most German universities</li>
                    <li>• Document verification service</li>
                    <li>• Processing fee required</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Direct University Portals</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Some universities have own systems</li>
                    <li>• Check individual requirements</li>
                    <li>• May require separate applications</li>
                    <li>• University-specific deadlines</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Application Strategy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="text-green-600" />
                Application Strategy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400">
                  <h4 className="font-semibold">Diversify Your Applications</h4>
                  <p className="text-sm mt-1">Apply to 5-8 universities: mix of Tier I and Tier II institutions to increase acceptance chances <CitationLink id="7" callType="quote" citations={citations}/></p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-3 bg-green-50 rounded-lg text-center">
                    <div className="font-semibold text-green-800">Research Phase</div>
                    <div className="text-sm text-green-600 mt-1">2-3 months</div>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg text-center">
                    <div className="font-semibold text-blue-800">Preparation</div>
                    <div className="text-sm text-blue-600 mt-1">3-4 months</div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg text-center">
                    <div className="font-semibold text-purple-800">Response Wait</div>
                    <div className="text-sm text-purple-600 mt-1">3-4 months</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Common Mistakes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="text-red-600" />
                Common Application Mistakes to Avoid
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Missing application deadlines',
                  'Incomplete document submission',
                  'Generic Statement of Purpose',
                  'Not checking university-specific requirements',
                  'Applying only to top-tier universities',
                  'Ignoring language requirements',
                  'Late scholarship applications',
                  'Over-reliance on consultants'
                ].map((mistake, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-red-50 rounded-lg">
                    <AlertTriangle size={16} className="text-red-600 mt-0.5" />
                    <span className="text-sm">{mistake}</span>
                  </div>
                ))}
              </div>
              <CitationLink id="7" callType="quote" citations={citations} className="text-sm text-gray-500 mt-4"/>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === 'visa' && (
        <div className="space-y-6">
          {/* Visa Process Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plane className="text-blue-600" />
                German Student Visa Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <img src={imageResources.gismaHeader} alt="German Student Visa Guide" className="w-full rounded-lg" />
              </div>
              
              <Alert className="mb-4">
                <Info className="h-4 w-4" />
                <AlertTitle>National Visa (D Visa) Required</AlertTitle>
                <AlertDescription>
                  Indian nationals must apply for a National Visa (D Visa) for studies in Germany <CitationLink id="2" callType="quote" citations={citations}/>
                </AlertDescription>
              </Alert>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Processing Time by Location</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between p-2 bg-red-50 rounded">
                      <span>New Delhi</span>
                      <span className="font-medium">10 weeks</span>
                    </div>
                    <div className="flex justify-between p-2 bg-green-50 rounded">
                      <span>Bangalore/Chennai/Mumbai</span>
                      <span className="font-medium">48 hours</span>
                    </div>
                    <div className="flex justify-between p-2 bg-yellow-50 rounded">
                      <span>Kolkata</span>
                      <span className="font-medium">1 week</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Visa Fees</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between p-2 bg-blue-50 rounded">
                      <span>Adults</span>
                      <span className="font-medium">€75</span>
                    </div>
                    <div className="flex justify-between p-2 bg-blue-50 rounded">
                      <span>Minors</span>
                      <span className="font-medium">€37.50</span>
                    </div>
                    <div className="text-xs text-gray-600 mt-2">
                      Payable in INR via Demand Draft <CitationLink id="1" callType="quote" citations={citations}/>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Visa Process Steps */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="text-purple-600" />
                Step-by-Step Visa Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {visaProcessData.map((step, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{step.step}</div>
                      <div className="text-sm text-gray-600">Duration: {step.duration}</div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs ${
                      step.importance === 'Critical' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {step.importance}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Financial Requirements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="text-green-600" />
                Financial Requirements (Blocked Account)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Blocked Account Details</h4>
                  <div className="space-y-2 text-sm">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="font-medium">Minimum Amount</div>
                      <div>€11,904 per year (2024) <CitationLink id="2" callType="quote" citations={citations}/></div>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="font-medium">Monthly Withdrawal</div>
                      <div>€861 per month allowed</div>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <div className="font-medium">Setup Time</div>
                      <div>1-3 weeks for account opening</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Approved Providers</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Fintiba</strong> (Popular online option)</li>
                    <li>• Deutsche Bank</li>
                    <li>• Kotak Mahindra Bank</li>
                    <li>• Capital India Finance Ltd.</li>
                    <li>• Drop Money</li>
                  </ul>
                  <CitationLink id="1" callType="quote" citations={citations} className="text-xs text-gray-500 mt-2"/>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Health Insurance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="text-red-600" />
                Health Insurance Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Travel Health Insurance</h4>
                  <p className="text-sm text-gray-600 mb-3">Required for visa application and initial period</p>
                  <div className="space-y-2 text-sm">
                    <div className="font-medium">International Providers:</div>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>DR-WALTER</li>
                      <li>AXA Assistance</li>
                      <li>Europ Assistance</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Indian Providers Accepted</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div>• Apollo Munich</div>
                    <div>• Bajaj Allianz</div>
                    <div>• HDFC ERGO</div>
                    <div>• Future Generali</div>
                    <div>• Go Digit</div>
                  </div>
                  <CitationLink id="1" callType="quote" citations={citations} className="text-xs text-gray-500 mt-2"/>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* After Arrival */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="text-orange-600" />
                After Arrival in Germany
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Alert>
                  <Clock className="h-4 w-4" />
                  <AlertTitle>Within 3 Months of Arrival</AlertTitle>
                  <AlertDescription>
                    Complete all registration and permit applications within 3 months
                  </AlertDescription>
                </Alert>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="font-semibold text-blue-800">1. Address Registration</div>
                    <div className="text-sm text-blue-600 mt-2">Register at local Bürgeramt</div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="font-semibold text-green-800">2. Health Insurance</div>
                    <div className="text-sm text-green-600 mt-2">Enroll in statutory plan</div>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="font-semibold text-purple-800">3. Residence Permit</div>
                    <div className="text-sm text-purple-600 mt-2">Apply at Ausländerbehörde</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Work Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="text-indigo-600" />
                Work Rights for Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Permitted Work</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 120 full days per year</li>
                    <li>• OR 240 half days per year</li>
                    <li>• University assistant work (unlimited)</li>
                    <li>• Obligatory internships (don't count)</li>
                  </ul>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Restrictions</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Internships count towards limit</li>
                    <li>• Additional work needs permission</li>
                    <li>• Must maintain study progress</li>
                  </ul>
                </div>
              </div>
              <CitationLink id="3" callType="quote" citations={citations} className="text-sm text-gray-500 mt-4"/>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === 'costs' && (
        <div className="space-y-6">
          {/* Cost Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Euro className="text-green-600" />
                Cost Breakdown for Studying in Germany
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={costsData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: €${value}`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="amount"
                    >
                      {costsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Monthly Living Costs</h4>
                  <div className="space-y-2">
                    {costsData.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span className="text-sm">{item.category}</span>
                        <span className="font-medium">€{item.amount}</span>
                      </div>
                    ))}
                    <div className="flex justify-between items-center p-2 bg-blue-100 rounded font-semibold">
                      <span>Total Monthly</span>
                      <span>€{costsData.reduce((sum, item) => sum + item.amount, 0)}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Annual Estimates (DAAD)</h4>
                  <div className="space-y-2 text-sm">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="font-medium">Budget Range</div>
                      <div>€700 - €1,400 per month</div>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="font-medium">Blocked Account</div>
                      <div>€11,904 minimum required</div>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <div className="font-medium">Study Materials</div>
                      <div>€31 per month average</div>
                    </div>
                  </div>
                </div>
              </div>
              <CitationLink id="6" callType="quote" citations={citations} className="text-sm text-gray-500 mt-4"/>
            </CardContent>
          </Card>

          {/* Tuition Fees */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="text-blue-600" />
                Tuition Fees Structure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-800">Public Universities</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="font-medium">Most Programs</div>
                      <div className="text-sm text-green-700">Generally tuition-free</div>
                      <div className="text-xs text-green-600">Semester fee: €100-€350</div>
                    </div>
                    <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="font-medium">Baden-Württemberg</div>
                      <div className="text-sm text-yellow-700">€1,500 per semester</div>
                      <div className="text-xs text-yellow-600">For non-EU students</div>
                    </div>
                    <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                      <div className="font-medium">Bavaria</div>
                      <div className="text-sm text-orange-700">University decides</div>
                      <div className="text-xs text-orange-600">Varies by institution</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-purple-800">Private Universities</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                      <div className="font-medium">Bachelor's Programs</div>
                      <div className="text-sm text-purple-700">€5,000 - €20,000 per year</div>
                    </div>
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <div className="font-medium">MBA Programs</div>
                      <div className="text-sm text-red-700">Up to €65,000</div>
                    </div>
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="font-medium">Specialized Programs</div>
                      <div className="text-sm text-blue-700">Varies significantly</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Accommodation Costs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="text-orange-600" />
                Accommodation Options & Costs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800">Student Dorms</h4>
                  <div className="text-2xl font-bold text-green-700 my-2">€267</div>
                  <div className="text-sm text-green-600">Most affordable option</div>
                  <ul className="text-xs text-green-600 mt-2 space-y-1">
                    <li>• Shared facilities</li>
                    <li>• University managed</li>
                    <li>• High demand</li>
                  </ul>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800">Shared Apartments (WG)</h4>
                  <div className="text-2xl font-bold text-blue-700 my-2">€300-650</div>
                  <div className="text-sm text-blue-600">Popular choice</div>
                  <ul className="text-xs text-blue-600 mt-2 space-y-1">
                    <li>• Own room</li>
                    <li>• Shared kitchen/bath</li>
                    <li>• Social environment</li>
                  </ul>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800">Private Apartments</h4>
                  <div className="text-2xl font-bold text-purple-700 my-2">€828</div>
                  <div className="text-sm text-purple-600">One-bedroom average</div>
                  <ul className="text-xs text-purple-600 mt-2 space-y-1">
                    <li>• Complete privacy</li>
                    <li>• €450-€1,500 range</li>
                    <li>• Location dependent</li>
                  </ul>
                </div>
              </div>
              <CitationLink id="6" callType="quote" citations={citations} className="text-sm text-gray-500 mt-4"/>
            </CardContent>
          </Card>

          {/* Scholarships */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="text-gold-600" />
                Scholarship Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Major Scholarships</h4>
                  <div className="space-y-2">
                    {[
                      { name: 'Deutschlandstipendium', amount: '€300/month' },
                      { name: 'DAAD Scholarships', amount: 'Full coverage' },
                      { name: 'Erasmus+ Scholarships', amount: 'Varies' },
                      { name: 'Heinrich Böll Foundation', amount: 'Full coverage' },
                      { name: 'Konrad Adenauer Foundation', amount: 'Full coverage' }
                    ].map((scholarship, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                        <span className="text-sm font-medium">{scholarship.name}</span>
                        <span className="text-sm text-yellow-700">{scholarship.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Application Tips</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-600 mt-0.5" />
                      Apply early - process takes months
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-600 mt-0.5" />
                      Strong academic record required
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-600 mt-0.5" />
                      Demonstrate financial need
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-600 mt-0.5" />
                      Show commitment to Germany
                    </li>
                  </ul>
                </div>
              </div>
              <CitationLink id="6" callType="quote" citations={citations} className="text-sm text-gray-500 mt-4"/>
            </CardContent>
          </Card>

          {/* Money-Saving Tips */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="text-green-600" />
                Money-Saving Strategies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Study Materials</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Use university libraries extensively</li>
                    <li>• Buy from used book markets</li>
                    <li>• Consider digital textbooks (€10-€60)</li>
                    <li>• Share books with classmates</li>
                    <li>• Access online resources</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Living Expenses</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Cook at home instead of eating out</li>
                    <li>• Use student discounts everywhere</li>
                    <li>• Take advantage of free university facilities</li>
                    <li>• Use public transport with student pass</li>
                    <li>• Shop at discount supermarkets</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === 'experiences' && (
        <div className="space-y-6">
          {/* Student Challenges */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="text-purple-600" />
                Real Student Experiences & Challenges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Common Student Concerns</AlertTitle>
                  <AlertDescription>
                    Based on student forum discussions and real experiences from Reddit and other platforms
                  </AlertDescription>
                </Alert>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-red-800">Major Challenges</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-red-50 border-l-4 border-red-400">
                        <div className="font-medium">APS and Visa Delays</div>
                        <div className="text-sm text-red-700 mt-1">
                          Students worry about delays affecting visa applications <CitationLink id="4" callType="quote" citations={citations}/>
                        </div>
                      </div>
                      <div className="p-3 bg-orange-50 border-l-4 border-orange-400">
                        <div className="font-medium">Information Gap</div>
                        <div className="text-sm text-orange-700 mt-1">
                          Difficulty finding clear answers about transfer processes <CitationLink id="4" callType="quote" citations={citations}/>
                        </div>
                      </div>
                      <div className="p-3 bg-yellow-50 border-l-4 border-yellow-400">
                        <div className="font-medium">Timing Confusion</div>
                        <div className="text-sm text-yellow-700 mt-1">
                          Uncertainty about optimal application timing vs. current studies
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-green-800">Success Factors</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 border-l-4 border-green-400">
                        <div className="font-medium">JEE Advantage</div>
                        <div className="text-sm text-green-700 mt-1">
                          JEE Advanced qualification provides direct entry path <CitationLink id="4" callType="quote" citations={citations}/>
                        </div>
                      </div>
                      <div className="p-3 bg-blue-50 border-l-4 border-blue-400">
                        <div className="font-medium">Score Validity</div>
                        <div className="text-sm text-blue-700 mt-1">
                          JEE scores remain valid even after gap year
                        </div>
                      </div>
                      <div className="p-3 bg-purple-50 border-l-4 border-purple-400">
                        <div className="font-medium">Early Planning</div>
                        <div className="text-sm text-purple-700 mt-1">
                          Students who plan early have better success rates
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Language Learning Experiences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Languages className="text-blue-600" />
                Language Learning Challenges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">German Language Reality</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="font-medium">C1 Requirement</div>
                      <div className="text-sm text-blue-700">
                        Programs like TU Berlin CS require C1 German <CitationLink id="4" callType="quote" citations={citations}/>
                      </div>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="font-medium">University Support</div>
                      <div className="text-sm text-green-700">
                        Some universities provide German language courses
                      </div>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded-lg">
                      <div className="font-medium">Dual Study Programs</div>
                      <div className="text-sm text-yellow-700">
                        Some "Duales Studium" may not require German proficiency <CitationLink id="4" callType="quote" citations={citations}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">English Program Options</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <div className="font-medium">Master's Programs</div>
                      <div className="text-sm text-purple-700">
                        More English-taught options at Master's level
                      </div>
                    </div>
                    <div className="p-3 bg-indigo-50 rounded-lg">
                      <div className="font-medium">Bachelor's Limited</div>
                      <div className="text-sm text-indigo-700">
                        Fewer English-taught Bachelor's programs available
                      </div>
                    </div>
                    <div className="p-3 bg-pink-50 rounded-lg">
                      <div className="font-medium">Basic German Still Needed</div>
                      <div className="text-sm text-pink-700">
                        A1/A2 German often required even for English programs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Financial Reality Check */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Euro className="text-green-600" />
                Financial Reality for Indian Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Tuition Fee Changes</AlertTitle>
                  <AlertDescription>
                    Some universities like TUM have started charging tuition fees from Indian students, 
                    while others like TU Berlin remain tuition-free <CitationLink id="4" callType="quote" citations={citations}/>
                  </AlertDescription>
                </Alert>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-red-800">Increasing Costs</h4>
                    <ul className="text-sm text-red-700 mt-2 space-y-1">
                      <li>• Some universities introducing fees</li>
                      <li>• Living costs rising in major cities</li>
                      <li>• Competition for affordable housing</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800">Still Affordable</h4>
                    <ul className="text-sm text-green-700 mt-2 space-y-1">
                      <li>• Many programs remain tuition-free</li>
                      <li>• Lower costs than US/UK</li>
                      <li>• Strong scholarship opportunities</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Student Tips</h4>
                    <ul className="text-sm text-blue-700 mt-2 space-y-1">
                      <li>• Research thoroughly before applying</li>
                      <li>• Apply for multiple scholarships</li>
                      <li>• Consider smaller cities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Success Stories & Tips */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="text-gold-600" />
                Success Strategies from Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">What Works</h4>
                  <div className="space-y-2">
                    {[
                      'Start APS process early in first year',
                      'Maintain high academic performance',
                      'Learn basic German alongside studies',
                      'Research universities thoroughly',
                      'Connect with current students',
                      'Prepare strong application documents',
                      'Apply to multiple universities',
                      'Have backup plans ready'
                    ].map((tip, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5" />
                        <span className="text-sm">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Common Pitfalls to Avoid</h4>
                  <div className="space-y-2">
                    {[
                      'Waiting until end of first year to start',
                      'Ignoring language requirements',
                      'Not checking university recognition',
                      'Applying to only top-tier universities',
                      'Missing application deadlines',
                      'Inadequate financial planning',
                      'Not preparing for interviews',
                      'Over-reliance on consultants'
                    ].map((pitfall, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <AlertTriangle size={16} className="text-red-600 mt-0.5" />
                        <span className="text-sm">{pitfall}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support Resources */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="text-blue-600" />
                Support Resources & Communities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Official Resources</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• DAAD (German Academic Exchange Service)</li>
                    <li>• APS India (Academic Evaluation Centre)</li>
                    <li>• German Embassy/Consulates</li>
                    <li>• University International Offices</li>
                    <li>• Goethe Institute for German language</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Student Communities</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Reddit communities (r/germany, r/indian_students)</li>
                    <li>• Facebook groups for Indian students</li>
                    <li>• University-specific WhatsApp groups</li>
                    <li>• LinkedIn professional networks</li>
                    <li>• Local Indian student associations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Citations Footer */}
      <Card className="w-full">
        <CardContent className="text-xs sm:text-sm text-muted-foreground mt-2 sm:mt-4 p-3 sm:p-6">
          <p className="font-semibold">References:</p>
          <ul className="space-y-1 mt-2">
            {Object.entries(citations).map(([id, citation]) => (
              <li key={id}>
                <CitationLink id={id} callType="recommend" citations={citations}/>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default GermanyTransferReport;
