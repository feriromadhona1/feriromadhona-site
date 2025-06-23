import Head from "next/head";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";


const portfolioItems = [
  { title: "Car Rent Desktop App", description: "Visual Basic application for managing car rental system." },
  { title: "Robusta Coffee Disease Detection", description: "Web-based expert system for diagnosing coffee plant diseases." },
  { title: "LAPAN Discussion Platform", description: "Internal discussion forum for aviation tech research." },
  { title: "Help Desk System - Westerindo", description: "Request & support management system." },
  { title: "Westerindo Company Profile", description: "Official website for Westerindo Laboratory.", link: "https://www.westerindo.com" },
  { title: "E-Procurement Analyst - Hutama Karya", description: "System analysis and support for eProcurement.", link: "https://www.eproc.hutamakarya.com" },
  { title: "SIMPADU - BPH Migas", description: "Integrated reporting system for BPH Migas.", link: "https://www.simpadu.bphmigas.go.id" },
  { title: "ePJLP DKI Jakarta", description: "Government system for Pemprov DKI Jakarta.", link: "https://www.epjlp.jakarta.go.id" },
  { title: "MTQ Information System", description: "Quran recitation event system for DKI Jakarta.", link: "https://www.lptq.jakarta.go.id" },
  { title: "SUMMIT App - Danamon", description: "Treasury & Capital Market application enhancement." },
  { title: "Valas Monitoring - Danamon", description: "Currency monitoring app in capital market division." },
  { title: "SWIFT App - Danamon", description: "Message transaction system enhancement." },
  { title: "Nostro Monitoring - Danamon", description: "Foreign currency reserve monitoring app." },
  { title: "SharePoint BAU - Bank Commonwealth", description: "Business as Usual support via SharePoint." },
  { title: "Email Monitoring - Astra Buana", description: "Monitoring and customization of email traffic." },
  { title: "MORE System - MUFG Bank", description: "Online reconciliation system." },
  { title: "ANDY App - BCA", description: "Document management system." },
  { title: "RCTI+", description: "Frontend development for interactive features in the RCTI+ web platform.", link: "https://rctiplus.com" },
];

export default function PortfolioPage() {
  return (
    <>
      <div className="mt-12 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300 hover:from-blue-700 hover:to-indigo-700"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
      <Head>
        <title>Portfolio - Feri Romadhona</title>
        <meta name="description" content="Explore the complete portfolio of Feri Romadhona, a professional frontend developer." />
      </Head>

      <main className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-sky-600 mb-12 dark:text-sky-400">
          🚀 Full Portfolio
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 group hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-lg font-semibold text-sky-700 dark:text-sky-300 group-hover:text-sky-500 transition-colors">
                {item.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {item.description}
              </p>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sky-600 dark:text-sky-300 hover:underline mt-3"
                >
                  Visit site <FaExternalLinkAlt className="ml-1 text-xs" />
                </a>
              )}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
