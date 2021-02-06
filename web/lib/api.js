import { client } from './sanity';

const fetchHome = async () => {
  return await client.fetch(
    `{
      'footer': *[!(_id in path("drafts.**")) && _type == 'footer'][0]{ contact, impressDe, impressEn },
      'seo': *[!(_id in path("drafts.**")) && _type == 'seo'][0]{ seoHome },
      'home': *[!(_id in path("drafts.**")) && _type == 'home'][0]{
        welcome{
          ...,
          'imageUrl': welcomeImage.asset->url,
          welcomeTextEn[]{
            ...,
            _type == 'downloadButton' => {
              'fileUrl': file.asset->url
            },
            _type == 'linkButton' => {
              'linkUrl': href
            },
            _type == 'gallery' => {
              images[]{
                'imageUrl': asset->url
              }
            },
            _type == 'image' => {
              'imageUrl': asset->url
            },
            _type == 'block' => {
              ...,
              markDefs[] {
                ...,
                _type == 'link' => {
                  'linkUrl': href
                },
                _type == 'file' => {
                  'fileUrl': asset->url
                },
                _type == 'blueBoxLink' => {
                  'linkUrl': href
                },
                _type == 'blueBoxFile' => {
                  'fileUrl': asset->url
                }
              }
            }
          },
          welcomeTextDe[]{
            ...,
            _type == 'downloadButton' => {
              'fileUrl': file.asset->url
            },
            _type == 'linkButton' => {
              'linkUrl': href
            },
            _type == 'gallery' => {
              images[]{
                'imageUrl': asset->url
              }
            },
            _type == 'image' => {
              'imageUrl': asset->url
            },
            _type == 'block' => {
              ...,
              markDefs[] {
                ...,
                _type == 'link' => {
                  'linkUrl': href
                },
                _type == 'file' => {
                  'fileUrl': asset->url
                },
                _type == 'blueBoxLink' => {
                  'linkUrl': href
                },
                _type == 'blueBoxFile' => {
                  'fileUrl': asset->url
                }
              }
            }
          }
        },
        research{
          ...,
          'imageUrl': researchImage.asset->url,
          researchTextEn[]{
            ...,
            _type == 'downloadButton' => {
              'fileUrl': file.asset->url
            },
            _type == 'linkButton' => {
              'linkUrl': href
            },
            _type == 'gallery' => {
              images[]{
                'imageUrl': asset->url
              }
            },
            _type == 'image' => {
              'imageUrl': asset->url
            },
            _type == 'block' => {
              ...,
              markDefs[] {
                ...,
                _type == 'link' => {
                  'linkUrl': href
                },
                _type == 'file' => {
                  'fileUrl': asset->url
                },
                _type == 'blueBoxLink' => {
                  'linkUrl': href
                },
                _type == 'blueBoxFile' => {
                  'fileUrl': asset->url
                }
              }
            }
          },
          researchTextDe[]{
            ...,
            _type == 'downloadButton' => {
              'fileUrl': file.asset->url
            },
            _type == 'linkButton' => {
              'linkUrl': href
            },
            _type == 'gallery' => {
              images[]{
                'imageUrl': asset->url
              }
            },
            _type == 'image' => {
              'imageUrl': asset->url
            },
            _type == 'block' => {
              ...,
              markDefs[] {
                ...,
                _type == 'link' => {
                  'linkUrl': href
                },
                _type == 'file' => {
                  'fileUrl': asset->url
                },
                _type == 'blueBoxLink' => {
                  'linkUrl': href
                },
                _type == 'blueBoxFile' => {
                  'fileUrl': asset->url
                }
              }
            }
          }
        },
        supportersAndPartners{
          ...,
          supportersAndPartnersTextEn[]{
            ...,
            _type == 'downloadButton' => {
              'fileUrl': file.asset->url
            },
            _type == 'linkButton' => {
              'linkUrl': href
            },
            _type == 'gallery' => {
              images[]{
                'imageUrl': asset->url
              }
            },
            _type == 'image' => {
              'imageUrl': asset->url
            },
            _type == 'block' => {
              ...,
              markDefs[] {
                ...,
                _type == 'link' => {
                  'linkUrl': href
                },
                _type == 'file' => {
                  'fileUrl': asset->url
                },
                _type == 'blueBoxLink' => {
                  'linkUrl': href
                },
                _type == 'blueBoxFile' => {
                  'fileUrl': asset->url
                }
              }
            }
          },
          supportersAndPartnersTextDe[]{
            ...,
            _type == 'downloadButton' => {
              'fileUrl': file.asset->url
            },
            _type == 'linkButton' => {
              'linkUrl': href
            },
            _type == 'gallery' => {
              images[]{
                'imageUrl': asset->url
              }
            },
            _type == 'image' => {
              'imageUrl': asset->url
            },
            _type == 'block' => {
              ...,
              markDefs[] {
                ...,
                _type == 'link' => {
                  'linkUrl': href
                },
                _type == 'file' => {
                  'fileUrl': asset->url
                },
                _type == 'blueBoxLink' => {
                  'linkUrl': href
                },
                _type == 'blueBoxFile' => {
                  'fileUrl': asset->url
                }
              }
            }
          },
          supportersAndPartners[]{
            ...,
            'linkUrl': href,
            'imageUrl': logo.asset->url
          }
        }
      }
    }`
  );
};

const fetchTeam = async () => {
  return await client.fetch(
    `{
      'footer': *[!(_id in path("drafts.**")) && _type == 'footer'][0]{ contact, impressDe, impressEn },
      'seo': *[!(_id in path("drafts.**")) && _type == 'seo'][0]{ seoTeam },
      'team': *[!(_id in path("drafts.**")) && _type == 'team'][0]{
        persons[]{
          ...,
          'pictureUrl': picture.asset->url,
          infoDe[]{
            ...,
            _type == 'downloadButton' => {
              'fileUrl': file.asset->url
            },
            _type == 'linkButton' => {
              'linkUrl': href
            },
            _type == 'gallery' => {
              images[]{
                'imageUrl': asset->url
              }
            },
            _type == 'image' => {
              'imageUrl': asset->url
            },
            _type == 'block' => {
              ...,
              markDefs[] {
                ...,
                _type == 'link' => {
                  'linkUrl': href
                },
                _type == 'file' => {
                  'fileUrl': asset->url
                },
                _type == 'blueBoxLink' => {
                  'linkUrl': href
                },
                _type == 'blueBoxFile' => {
                  'fileUrl': asset->url
                }
              }
            }
          },
          infoEn[]{
            ...,
            _type == 'downloadButton' => {
              'fileUrl': file.asset->url
            },
            _type == 'linkButton' => {
              'linkUrl': href
            },
            _type == 'gallery' => {
              images[]{
                'imageUrl': asset->url
              }
            },
            _type == 'image' => {
              'imageUrl': asset->url
            },
            _type == 'block' => {
              ...,
              markDefs[] {
                ...,
                _type == 'link' => {
                  'linkUrl': href
                },
                _type == 'file' => {
                  'fileUrl': asset->url
                },
                _type == 'blueBoxLink' => {
                  'linkUrl': href
                },
                _type == 'blueBoxFile' => {
                  'fileUrl': asset->url
                }
              }
            }
          }
        }
      }
    }`
  );
};

const fetchNews = async () => {
  return await client.fetch(
    `{
      'footer': *[!(_id in path("drafts.**")) && _type == 'footer'][0]{ contact, impressDe, impressEn },
      'seo': *[!(_id in path("drafts.**")) && _type == 'seo'][0]{ seoNews },
      'news': *[!(_id in path("drafts.**")) && _type == 'news']{
        date,
        newsEntryDe[]{
          ...,
          _type == 'downloadButton' => {
            'fileUrl': file.asset->url
          },
          _type == 'linkButton' => {
            'linkUrl': href
          },
          _type == 'gallery' => {
            images[]{
              'imageUrl': asset->url
            }
          },
          _type == 'image' => {
            'imageUrl': asset->url
          },
          _type == 'block' => {
            ...,
            markDefs[] {
              ...,
              _type == 'link' => {
                'linkUrl': href
              },
              _type == 'file' => {
                'fileUrl': asset->url
              },
              _type == 'blueBoxLink' => {
                'linkUrl': href
              },
              _type == 'blueBoxFile' => {
                'fileUrl': asset->url
              }
            }
          }
        },
        newsEntryEn[]{
          ...,
          _type == 'downloadButton' => {
            'fileUrl': file.asset->url
          },
          _type == 'linkButton' => {
            'linkUrl': href
          },
          _type == 'gallery' => {
            images[]{
              'imageUrl': asset->url
            }
          },
          _type == 'image' => {
            'imageUrl': asset->url
          },
          _type == 'block' => {
            ...,
            markDefs[] {
              ...,
              _type == 'link' => {
                'linkUrl': href
              },
              _type == 'file' => {
                'fileUrl': asset->url
              },
              _type == 'blueBoxLink' => {
                'linkUrl': href
              },
              _type == 'blueBoxFile' => {
                'fileUrl': asset->url
              }
            }
          }
        },
      } | order(date desc)
    }`
  );
};

const fetchPublications = async () => {
  return await client.fetch(
    `{
      'footer': *[!(_id in path("drafts.**")) && _type == 'footer'][0]{ contact, impressDe, impressEn },
      'seo': *[!(_id in path("drafts.**")) && _type == 'seo'][0]{ seoPublications },
      'publications': *[!(_id in path("drafts.**")) && _type == 'publications'][0]{
        content[]{
          ...,
          _type == 'downloadButton' => {
            'fileUrl': file.asset->url
          },
          _type == 'linkButton' => {
            'linkUrl': href
          },
          _type == 'gallery' => {
            images[]{
              'imageUrl': asset->url
            }
          },
          _type == 'image' => {
            'imageUrl': asset->url
          },
          _type == 'block' => {
            ...,
            markDefs[] {
              ...,
              _type == 'link' => {
                'linkUrl': href
              },
              _type == 'file' => {
                'fileUrl': asset->url
              },
              _type == 'blueBoxLink' => {
                'linkUrl': href
              },
              _type == 'blueBoxFile' => {
                'fileUrl': asset->url
              }
            }
          }
        }
      }
    }`
  );
};

export { fetchTeam, fetchNews, fetchPublications, fetchHome };
