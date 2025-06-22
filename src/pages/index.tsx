import Head from 'next/head'; // Import komponen Head
import Profiles from "@/components/molecules/Profiles/index";


const Profile = () => {
  return (
    <>
      <Head>
        <title>Feri Romadhona - Portofolio Pengembang Web & Desainer UI/UX</title>
        <meta name="description" content="Portofolio resmi Feri Romadhona, seorang pengembang web profesional dan desainer UI/UX. Jelajahi proyek terbaru, keahlian, dan hubungi untuk kolaborasi." />
        <meta name="keywords" content="Feri Romadhona, portofolio, web developer, UI/UX designer, front-end developer, React, Next.js, JavaScript, desain antarmuka, pengalaman pengguna, Depok, Indonesia" />
        <meta name="author" content="Feri Romadhona" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://feriromadhona1.github.io/" /> 

        <meta property="og:title" content="Feri Romadhona - Portofolio Pengembang Web & Desainer UI/UX" />
        <meta property="og:description" content="Portofolio resmi Feri Romadhona, seorang pengembang web profesional dan desainer UI/UX. Jelajahi proyek terbaru, keahlian, dan hubungi untuk kolaborasi." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://feriromadhona1.github.io/" />
        <meta property="og:image" content="https://feriromadhona1.github.io/assets/images/feri-romadhona.jpg" /> 
        <meta property="og:image:alt" content="Portofolio Feri Romadhona" />
        <meta property="og:locale" content="id_ID" />

        {/* Twitter Card Meta Tags (untuk berbagi di Twitter) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@feriromadhona1>" /> 
        <meta name="twitter:creator" content="@feriromadhona1>" /> 
        <meta name="twitter:title" content="Feri Romadhona - Portofolio Pengembang Web & Desainer UI/UX" />
        <meta name="twitter:description" content="Jelajahi portofolio Feri Romadhona, seorang pengembang web profesional dan desainer UI/UX. Lihat proyek dan keahliannya di sini!" />
        <meta name="twitter:image" content="https://feriromadhona1.github.io/assets/images/feri-romadhona.jpg" /> 

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/f.png" />
      </Head>

      <div>
        <Profiles/>
      </div>
    </>
  );
};

export default Profile;