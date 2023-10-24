/**
 * All Community Members Lists and Components...
 */

import Image from 'next/image'
import Link from 'next/link'
import { MaxWidthContainer } from '.'

type ContributorsType = {
  name: string
  avatar_url: string
  html_url: string
}
export const allContributors = [
  {
    name: 'hemantwasthere',
    id: 85151171,
    avatar_url: 'https://avatars.githubusercontent.com/u/85151171?v=4',
    html_url: 'https://github.com/hemantwasthere',
  },
  {
    name: 'piyushgarg-dev',
    id: 44976328,
    avatar_url: 'https://avatars.githubusercontent.com/u/44976328?v=4',
    html_url: 'https://github.com/piyushgarg-dev',
  },
  {
    name: 'priyankeshh',
    id: 102135464,
    avatar_url: 'https://avatars.githubusercontent.com/u/102135464?v=4',
    html_url: 'https://github.com/priyankeshh',
  },
  {
    name: 'C0dewithLokesh',
    id: 77185999,
    avatar_url: 'https://avatars.githubusercontent.com/u/77185999?v=4',
    html_url: 'https://github.com/C0dewithLokesh',
  },
  {
    name: 'Hari1122-code',
    id: 77155890,
    avatar_url: 'https://avatars.githubusercontent.com/u/77155890?v=4',
    html_url: 'https://github.com/Hari1122-code',
  },
  {
    name: 'ChaudharyPradip',
    id: 88336529,
    avatar_url: 'https://avatars.githubusercontent.com/u/88336529?v=4',
    html_url: 'https://github.com/ChaudharyPradip',
  },
  {
    name: 'Anandateertha',
    id: 131521505,
    avatar_url: 'https://avatars.githubusercontent.com/u/131521505?v=4',
    html_url: 'https://github.com/Anandateertha',
  },
  {
    name: 'MeethDavda',
    id: 97303932,
    avatar_url: 'https://avatars.githubusercontent.com/u/97303932?v=4',
    html_url: 'https://github.com/MeethDavda',
  },
  {
    name: 'sushilmagare10',
    id: 115215071,
    avatar_url: 'https://avatars.githubusercontent.com/u/115215071?v=4',
    html_url: 'https://github.com/sushilmagare10',
  },
  {
    name: 'NamelesssNerd',
    id: 87481819,
    avatar_url: 'https://avatars.githubusercontent.com/u/87481819?v=4',
    html_url: 'https://github.com/NamelesssNerd',
  },
  {
    name: 'ManishPJha',
    id: 93715065,
    avatar_url: 'https://avatars.githubusercontent.com/u/93715065?v=4',
    html_url: 'https://github.com/ManishPJha',
  },
  {
    name: 'ebraj',
    id: 61580196,
    avatar_url: 'https://avatars.githubusercontent.com/u/61580196?v=4',
    html_url: 'https://github.com/ebraj',
  },
  {
    name: 'kaustab28',
    id: 88625796,
    avatar_url: 'https://avatars.githubusercontent.com/u/88625796?v=4',
    html_url: 'https://github.com/kaustab28',
  },
  {
    name: 'Ram-tyagi',
    id: 40211634,
    avatar_url: 'https://avatars.githubusercontent.com/u/40211634?v=4',
    html_url: 'https://github.com/Ram-tyagi',
  },
  {
    name: 'GautamGoyal2341',
    id: 78250503,
    avatar_url: 'https://avatars.githubusercontent.com/u/78250503?v=4',
    html_url: 'https://github.com/GautamGoyal2341',
  },
  {
    name: 'Manveer-Pbx1',
    id: 70777863,
    avatar_url: 'https://avatars.githubusercontent.com/u/70777863?v=4',
    html_url: 'https://github.com/Manveer-Pbx1',
  },
  {
    name: 'Mosam2191',
    id: 133772086,
    avatar_url: 'https://avatars.githubusercontent.com/u/133772086?v=4',
    html_url: 'https://github.com/Mosam2191',
  },
  {
    name: 'ratnaraj7',
    id: 102022870,
    avatar_url: 'https://avatars.githubusercontent.com/u/102022870?v=4',
    html_url: 'https://github.com/ratnaraj7',
  },
  {
    name: 'saadabban76',
    id: 115649011,
    avatar_url: 'https://avatars.githubusercontent.com/u/115649011?v=4',
    html_url: 'https://github.com/saadabban76',
  },
  {
    name: 'saipranay47',
    id: 70259716,
    avatar_url: 'https://avatars.githubusercontent.com/u/70259716?v=4',
    html_url: 'https://github.com/saipranay47',
  },
  {
    name: 'MeenuyD',
    id: 116630390,
    avatar_url: 'https://avatars.githubusercontent.com/u/116630390?v=4',
    html_url: 'https://github.com/MeenuyD',
  },
  {
    name: 'Chaitanya-Shahare',
    id: 108579856,
    avatar_url: 'https://avatars.githubusercontent.com/u/108579856?v=4',
    html_url: 'https://github.com/Chaitanya-Shahare',
  },
  {
    name: 'MrLEGENDx10',
    id: 115637298,
    avatar_url: 'https://avatars.githubusercontent.com/u/115637298?v=4',
    html_url: 'https://github.com/MrLEGENDx10',
  },
]
export const CommunityMembers = () => {
  return (
    <MaxWidthContainer className="relative z-10 pb-20">
      <div className="absolute inset-0 left-0 top-0 -z-10  opacity-20">
        <div className="h-60 bg-gradient-to-br from-green-500 to-sky-600 blur-[106px] dark:from-sky-900 dark:to-sky-950"></div>
        <div className="h-60 bg-gradient-to-r from-sky-500 to-green-600 blur-[200px] dark:from-sky-800 dark:to-sky-900"></div>
      </div>
      <div className="text-center">
        <h2 className="custom-animated-text pb-6 text-4xl font-black md:text-5xl">
          Our Members
        </h2>
        <p className="text-xl dark:text-slate-100">
          Great hustle by the members <br /> to bring us with the review app.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8 pt-20">
        {allContributors &&
          allContributors.map((single: ContributorsType, index: number) => {
            return (
              <Link
                href={single.html_url}
                passHref
                target="_blank"
                key={single.name}
                className="flex flex-col items-center justify-center space-y-4 text-center"
              >
                <Image
                  src={single.avatar_url}
                  style={{ objectFit: 'cover' }}
                  width={100}
                  height={100}
                  className="rounded-full bg-gradient-to-tr from-[#845df1] via-[#e94389] to-[#e0ab18] p-1"
                  alt="Product UI Image"
                />
                <h3>{single.name}</h3>
              </Link>
            )
          })}
      </div>
    </MaxWidthContainer>
  )
}
