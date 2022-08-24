import React, { useEffect, useState } from 'react';

import axios from 'axios';
import Carousel from 'react-multi-carousel';

import { Container } from './styles';
import { SetLanguageUtils as language } from '../../../utils/language.utils';
import articlesLang from '../../../locales/home/articles/index.json';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

type ArticleType = {
  status: string;

  feed: {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
  };

  items: {
    title: string;
    pubDate: string;
    link: string;
    guid: string;
    author: string;
    thumbnail?: string;
  }[];
};

export function Articles() {
  const [articles, setArticles] = useState<ArticleType>({} as ArticleType);
  // const dateLanguage: string = language() === 'en' ? 'en-IR' : 'pt-BR';

  useEffect(() => {
    getArticles();
  }, []);

  function getArticles(): void {
    axios
      .get(
        'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@davifsroberto'
      )
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => console.error(error));
  }

  return (
    <Container id="articles">
      <div className="container">
        <p className="paragraph">{articlesLang[language()].title}</p>
        <h3 className="mb-sm-5 mb-4">{articlesLang[language()].subtitle}</h3>

        {!articles.items && (
          <h5>
            <a
              href="https://medium.com/@davifsroberto"
              target="_blank"
              rel="noreferrer"
            >
              {articlesLang[language()].redirect} 😉
            </a>
          </h5>
        )}

        {articles.items && (
          <Carousel responsive={responsive} autoPlaySpeed={99999}>
            {articles.items.map((item) => (
              <section key={item.guid} className="px-1 pt-2">
                <section className="card">
                  <section
                    className="bg-article"
                    style={{ background: `url(${item.thumbnail}) no-repeat` }}
                  ></section>

                  <section className="card-body">
                    <h6>{item.title}</h6>

                    <p className="card-text pt-1">
                      <span>Davi Roberto</span>

                      {/* <span className="text-end">
                        {new Intl.DateTimeFormat(dateLanguage, {
                          dateStyle: 'short',
                        }).format(new Date(item.pubDate))}
                      </span> */}
                    </p>

                    <a
                      className="btn btn-default-reverse"
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {articlesLang[language()].read}
                    </a>
                  </section>
                </section>
              </section>
            ))}
          </Carousel>
        )}
      </div>
    </Container>
  );
}
