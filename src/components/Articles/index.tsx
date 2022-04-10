import React, { useEffect, useState } from 'react';

import axios from 'axios';
import Carousel from 'react-multi-carousel';

import { Container } from './styles';

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
    thumbnail: string;
  }[];
};

export function Articles() {
  const [articles, setArticles] = useState<ArticleType>({} as ArticleType);

  useEffect(() => {
    getArticles();
  }, []);

  function getArticles(): void {
    axios
      .get(
        'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@davifsroberto'
      )
      .then((response) => setArticles(response.data));
  }

  return (
    <Container id="articles">
      <div className="container">
        <p className="paragraph">Artigos</p>
        <h3 className="mb-sm-5 mb-4">Últimos Artigos Publicados</h3>

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

                      <span className="text-end">
                        {new Intl.DateTimeFormat('pt-br', {
                          dateStyle: 'short',
                        }).format(new Date(item.pubDate))}
                      </span>
                    </p>

                    <a
                      className="btn btn-default"
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      LER ARTIGO
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
