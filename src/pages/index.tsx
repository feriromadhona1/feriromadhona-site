import Head from 'next/head'; // Import komponen Head
import Profiles from "@/components/molecules/Profiles/index";


const Profile = () => {
  return (
    <>
      <Head>
        <title>Feri Romadhona – Fullstack Developer & Software Engineer</title>
        <meta
          name="description"
          content="Portofolio resmi Feri Romadhona, Fullstack Developer dan Software Engineer. Menyediakan solusi pengembangan aplikasi web, sistem backend, dan teknologi digital modern."
        />
        <meta
          name="keywords"
          content="Feri Romadhona, fullstack developer, software engineer, web developer, aplikasi web, backend, sistem informasi, pengembang perangkat lunak, Indonesia"
        />
        <meta name="author" content="Feri Romadhona" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://feriromadhona1.github.io/" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Feri Romadhona – Fullstack Developer & Software Engineer"
        />
        <meta
          property="og:description"
          content="Portofolio resmi Feri Romadhona, Fullstack Developer dan Software Engineer. Jelajahi proyek-proyek teknologi modern, sistem backend, dan solusi digital."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://feriromadhona1.github.io/" />
        <meta
          property="og:image"
          content="https://feriromadhona1.github.io/assets/images/feri-romadhona.jpg"
        />
        <meta property="og:image:alt" content="Portofolio Feri Romadhona" />
        <meta property="og:locale" content="id_ID" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@feriromadhona1" />
        <meta name="twitter:creator" content="@feriromadhona1" />
        <meta
          name="twitter:title"
          content="Feri Romadhona – Fullstack Developer & Software Engineer"
        />
        <meta
          name="twitter:description"
          content="Lihat portofolio lengkap Feri Romadhona, Fullstack Developer yang ahli dalam membangun solusi aplikasi dan sistem backend."
        />
        <meta
          name="twitter:image"
          content="https://feriromadhona1.github.io/assets/images/feri-romadhona.jpg"
        />

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