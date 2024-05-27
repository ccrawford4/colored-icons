import DocIcon from "@/components/Icon/DocIcon";
import { docIcons } from "@/constants/docIcons";
import Head from "next/head";

const getIconFromFilename = (filename: string) => {
  return filename.split(".")[0];
};
const Page = () => {
  return (
    <>
      <Head>
        <title>Colored Icons Documentation</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/dheereshagrwal/colored-icons@1.7.5/src/app/ci.min.css"
        />
      </Head>
      <div>
        <h1>Documentation</h1>
        <p>Sample icons</p>
        <div className="flex flex-wrap gap-4">
          {docIcons.map((icon) => (
            <DocIcon
              key={icon.filename}
              src={`icons/${getIconFromFilename(icon.filename)}/${
                icon.filename
              }`}
              alt={getIconFromFilename(icon.filename)}
              className="h-12"
            />
          ))}
        </div>

        <h2>Features</h2>
        <ul>
          <li>
            Super easy integration into your web projects using the{" "}
            <code>&lt;i&gt;</code> tag
          </li>
          <li>Change the size of icons, just like Font Awesome icons</li>
          <li>
            Flip the colors of icons using the <code>ci-invert</code> class
          </li>
        </ul>

        <h2>Installation</h2>
        <p>
          To use the Colored Icons Library, simply add the following CDN link to
          your HTML file (Be careful with the release versions, they might
          include breaking changes):
        </p>
        <pre>
          <code>
            &lt;link rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/dheereshagrwal/colored-icons@1.7.5/src/app/ci.min.css"
            /&gt;
          </code>
        </pre>

        <h2>Usage</h2>
        <pre>
          <code>&lt;i class="ci ci-spotify ci-2x"&gt;&lt;/i&gt;</code>
        </pre>
        <img src="icons/spotify/spotify.svg" width="32px" />

        <pre>
          <code>&lt;i class="ci ci-git ci-md"&gt;&lt;/i&gt;</code>
        </pre>
        <img src="icons/git/git.svg" width="16px" />

        <pre>
          <code>&lt;i class="ci ci-nuxtjs ci-5x"&gt;&lt;/i&gt;</code>
        </pre>
        <img src="icons/nuxtjs/nuxtjs.svg" width="80px" />

        <pre>
          <code>&lt;i class="ci ci-azure ci-sm"&gt;&lt;/i&gt;</code>
        </pre>
        <img src="icons/azure/azure.svg" width="14px" />

        <pre>
          <code>&lt;i class="ci ci-redis ci-3x"&gt;&lt;/i&gt;</code>
        </pre>
        <img src="icons/redis/redis.svg" width="48px" />

        <h2>Inverting the color</h2>
        <p>
          If you want to invert the color for some reason, just add{" "}
          <code>ci-invert</code>.
        </p>
        <pre>
          <code>&lt;i class="ci ci-postman ci-2x ci-invert"&gt;&lt;/i&gt;</code>
        </pre>

        <h2>Sizing</h2>
        <p>I used the same sizing style used by font awesome:</p>
        <p>
          <code>ci-2xs</code> <code>ci-xs</code> <code>ci-sm</code>{" "}
          <code>ci-md</code> <code>ci-lg</code> <code>ci-xl</code>{" "}
          <code>ci-2xl</code>
        </p>
        <div>
          <img src="icons/discord/discord.svg" width="10px" />
          <img src="icons/discord/discord.svg" width="12px" />
          <img src="icons/discord/discord.svg" width="14px" />
          <img src="icons/discord/discord.svg" width="16px" />
          <img src="icons/discord/discord.svg" width="20px" />
          <img src="icons/discord/discord.svg" width="24px" />
          <img src="icons/discord/discord.svg" width="32px" />
        </div>
        <p>
          <code>ci-1x</code> <code>ci-2x</code> <code>ci-3x</code>{" "}
          <code>ci-4x</code> <code>ci-5x</code> <code>ci-6x</code>{" "}
          <code>ci-7x</code> <code>ci-8x</code> <code>ci-9x</code>{" "}
          <code>ci-10x</code>
        </p>
        <div>
          <img src="icons/discord/discord.svg" width="16px" />
          <img src="icons/discord/discord.svg" width="32px" />
          <img src="icons/discord/discord.svg" width="48px" />
          <img src="icons/discord/discord.svg" width="64px" />
          <img src="icons/discord/discord.svg" width="80px" />
          <img src="icons/discord/discord.svg" width="96px" />
          <img src="icons/discord/discord.svg" width="112px" />
          <img src="icons/discord/discord.svg" width="128px" />
          <img src="icons/discord/discord.svg" width="144px" />
          <img src="icons/discord/discord.svg" width="160px" />
        </div>
        <p>
          For more details about the sizing, you can refer to this{" "}
          <a href="https://fontawesome.com/docs/web/style/size">
            Font Awesome Icon Size Documentation
          </a>
        </p>

        <h2>Dark and Light icons</h2>
        <p>
          By default, the <code>ci-nextjs</code> will refer to the dark version
          of the logo which means that you have to use it on a light background,
          you can also write <code>ci-nextjs-dark</code> for the same. Just
          don't write <code>ci-nextjs ci-dark</code>, dark is not some class
          that can be applied to colored icons.
        </p>
        <p>
          <code>ci-nextjs</code>
        </p>
        <img src="icons/nextjs/nextjs.svg" width="48px" />
        <p>
          Similarly, <code>ci-nextjs-light</code> refers to the light version of
          the icon which means that you have to use it on a dark background.
          Note that not every brand has dark and/or light icons
        </p>
        <img src="icons/nextjs/nextjs-light.svg" width="48px" />

        <h2>Horizontal (Inline), Vertical (Stacked), and Wordmark icons</h2>
        <p>
          <code>ci-infura-wordmark</code> refers to the wordmark icon of the
          brand. If you don't understand what it means, you can refer to this{" "}
          <a href="https://www.infura.io/presskit">Infura Press Kit</a>
        </p>
        <img
          src="icons/infura/infura-wordmark.svg"
          alt="Infura Wordmark"
          width="96"
        />
        <p>
          <code>ci-whatsapp-horizontal</code> or <code>ci-whatsapp-inline</code>{" "}
          refers to the horizontal/inline icon with the logo on the left and
          wordmark on the right.
        </p>
        <img
          src="icons/whatsapp/whatsapp-horizontal.svg"
          alt="Whatsapp Horizontal"
          width="96"
        />
        <p>
          Similarly, <code>ci-whatsapp-vertical</code> or{" "}
          <code>ci-whatsapp-stacked</code> refers to the vertical/stacked icon
          with the logo on top and wordmark on the bottom. If you wish to know
          more about the naming convention, refer to this{" "}
          <a href="https://alan.app/brand-assets/">Alan Brand Assets</a>.
        </p>
        <p>Note that not every brand has horizontal and/or vertical icons.</p>
        <img
          src="icons/whatsapp/whatsapp-vertical.svg"
          alt="Whatsapp Vertical"
          width="96"
        />

        <h2>Second version</h2>
        <p>
          Some icons have a second version of them provided which is a darker
          shade of the original such as
        </p>
        <p>
          <code>ci ci-mongodb2</code>
        </p>
        <img
          src="icons/mongodb/mongodb2.svg"
          alt="MongoDB2 Icon"
          className="h-12"
        />
        <p>
          <code>ci ci-mongodb</code>
        </p>
        <img
          src="icons/mongodb/mongodb.svg"
          alt="MongoDB Icon"
          className="h-12"
        />

        <h2>Contribution</h2>
        <p>
          The code is very lightweight and dead simple; there is nothing fancy
          going on.
        </p>

        <h3>Guidelines for naming</h3>
        <ul>
          <li>
            <code>logo -&gt; company.svg</code>
          </li>
          <li>
            <code>wordmark (text) -&gt; company-wordmark.svg</code>
          </li>
          <li>
            <code>logo + wordmark -&gt; company-horizontal.svg</code>
          </li>
        </ul>
        <p>
          If you want me to add an icon that is missing or have some
          suggestions, just raise an issue.
        </p>

        <h2>License</h2>
        <p>
          The Colored Icons Library is licensed under the MIT License. Please
          review the license file for more details.
        </p>

        <h2>Contact 👋🏻</h2>
        <p>
          <a href="https://dheereshagrwal.vercel.app">
            Visit my personal website
          </a>
        </p>
      </div>
    </>
  );
};

export default Page;
