'use client'

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { use } from "react";


const articlesLink = [
    { id: '23', title: 'English', language: 'en', name: 'english' },
    { id: '12', title: 'Hindi', language: 'hi', name: 'hindi' },
    { id: '34', title: 'French', language: 'fr', name: 'french' }
]

export default function Articles({ params, searchParams }: {
    params: Promise<{ articleId: string }>,
    searchParams: Promise<{ lang?: 'en' | 'hi' | 'fr' }>
}) {
    const pathName = usePathname()
    const { articleId } = use(params)
    const { lang } = use(searchParams)
    return (
        <div>
            <h1>Article id is {articleId}</h1>
            <p>Article language is {lang}</p>
            <div>
                {articlesLink.map((article) => {
                    const pathArray = pathName.split('/')
                    const isActive = article.id === pathArray[pathArray.length-1]
                    return (
                        <Link
                            className={isActive ? 'text-blue-500 ml-4' : 'text-black ml-4'}
                            href={`/articles/${article?.id}?lang=${article?.language}`}
                            key={article.id}
                        >
                            {article?.title}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}