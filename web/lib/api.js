import { client } from './sanity';

const fetchHome = async () => {
  return await client.fetch(
    `{
      'seo': *[!(_id in path("drafts.**")) && _type == 'seo'][0]{ seoHome },
      'home': *[!(_id in path("drafts.**")) && _type == 'home'][0]{
        welcome{
          ...,
          'imageUrl': welcomeImage.asset->url,
          'width': welcomeImage.asset->metadata.dimensions.width,
          'height': welcomeImage.asset->metadata.dimensions.height,
          'altText': welcomeImage.asset->altText,
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
                'imageUrl': asset->url,
                'width': asset->metadata.dimensions.width,
                'height': asset->metadata.dimensions.height,
                'altText': asset->altText
              }
            },
            _type == 'image' => {
              'imageUrl': asset->url,
              'width': asset->metadata.dimensions.width,
              'height': asset->metadata.dimensions.height,
              'altText': asset->altText
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
                'imageUrl': asset->url,
                'width': asset->metadata.dimensions.width,
                'height': asset->metadata.dimensions.height,
                'altText': asset->altText
              }
            },
            _type == 'image' => {
              'imageUrl': asset->url,
              'width': asset->metadata.dimensions.width,
              'height': asset->metadata.dimensions.height,
              'altText': asset->altText
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
          'width': researchImage.asset->metadata.dimensions.width,
          'height': researchImage.asset->metadata.dimensions.height,
          'altText': researchImage.asset->altText,
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
                'imageUrl': asset->url,
                'width': asset->metadata.dimensions.width,
                'height': asset->metadata.dimensions.height,
                'altText': asset->altText
              }
            },
            _type == 'image' => {
              'imageUrl': asset->url,
              'width': asset->metadata.dimensions.width,
              'height': asset->metadata.dimensions.height,
              'altText': asset->altText
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
                'imageUrl': asset->url,
                'width': asset->metadata.dimensions.width,
                'height': asset->metadata.dimensions.height,
                'altText': asset->altText
              }
            },
            _type == 'image' => {
              'imageUrl': asset->url,
              'width': asset->metadata.dimensions.width,
              'height': asset->metadata.dimensions.height,
              'altText': asset->altText
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
                'imageUrl': asset->url,
                'width': asset->metadata.dimensions.width,
                'height': asset->metadata.dimensions.height,
                'altText': asset->altText
              }
            },
            _type == 'image' => {
              'imageUrl': asset->url,
              'width': asset->metadata.dimensions.width,
              'height': asset->metadata.dimensions.height,
              'altText': asset->altText
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
                'imageUrl': asset->url,
                'width': asset->metadata.dimensions.width,
                'height': asset->metadata.dimensions.height,
                'altText': asset->altText
              }
            },
            _type == 'image' => {
              'imageUrl': asset->url,
              'width': asset->metadata.dimensions.width,
              'height': asset->metadata.dimensions.height,
              'altText': asset->altText
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
            'imageUrl': logo.asset->url,
            'width': logo.asset->metadata.dimensions.width,
            'height': logo.asset->metadata.dimensions.height,
            'altText': logo.asset->altText
          }
        }
      }
    }`
  );
};

const fetchTeam = async () => {
  return await client.fetch(
    `{
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
                'imageUrl': asset->url,
                'width': asset->metadata.dimensions.width,
                'height': asset->metadata.dimensions.height,
                'altText': asset->altText
              }
            },
            _type == 'image' => {
              'imageUrl': asset->url,
              'width': asset->metadata.dimensions.width,
              'height': asset->metadata.dimensions.height,
              'altText': asset->altText
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
                'imageUrl': asset->url,
                'width': asset->metadata.dimensions.width,
                'height': asset->metadata.dimensions.height,
                'altText': asset->altText
              }
            },
            _type == 'image' => {
              'imageUrl': asset->url,
              'width': asset->metadata.dimensions.width,
              'height': asset->metadata.dimensions.height,
              'altText': asset->altText
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
              'imageUrl': asset->url,
              'width': asset->metadata.dimensions.width,
              'height': asset->metadata.dimensions.height,
              'altText': asset->altText
            }
          },
          _type == 'image' => {
            'imageUrl': asset->url,
            'width': asset->metadata.dimensions.width,
            'height': asset->metadata.dimensions.height,
            'altText': asset->altText
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
              'imageUrl': asset->url,
              'width': asset->metadata.dimensions.width,
              'height': asset->metadata.dimensions.height,
              'altText': asset->altText
            }
          },
          _type == 'image' => {
            'imageUrl': asset->url,
            'width': asset->metadata.dimensions.width,
            'height': asset->metadata.dimensions.height,
            'altText': asset->altText
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
              'imageUrl': asset->url,
              'width': asset->metadata.dimensions.width,
              'height': asset->metadata.dimensions.height,
              'altText': asset->altText
            }
          },
          _type == 'image' => {
            'imageUrl': asset->url,
            'width': asset->metadata.dimensions.width,
            'height': asset->metadata.dimensions.height,
            'altText': asset->altText
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

const fetchImprint = async () => {
  return await client.fetch(
    `{
      'imprint': *[!(_id in path("drafts.**")) && _type == 'imprint'][0]{
        imprintContentEn[]{
          ...,
          _type == 'downloadButton' => {
            'fileUrl': file.asset->url
          },
          _type == 'linkButton' => {
            'linkUrl': href
          },
          _type == 'gallery' => {
            images[]{
              'imageUrl': asset->url,
              'width': asset->metadata.dimensions.width,
              'height': asset->metadata.dimensions.height,
              'altText': asset->altText
            }
          },
          _type == 'image' => {
            'imageUrl': asset->url,
            'width': asset->metadata.dimensions.width,
            'height': asset->metadata.dimensions.height,
            'altText': asset->altText
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
        imprintContentGe[]{
          ...,
          _type == 'downloadButton' => {
            'fileUrl': file.asset->url
          },
          _type == 'linkButton' => {
            'linkUrl': href
          },
          _type == 'gallery' => {
            images[]{
              'imageUrl': asset->url,
              'width': asset->metadata.dimensions.width,
              'height': asset->metadata.dimensions.height,
              'altText': asset->altText
            }
          },
          _type == 'image' => {
            'imageUrl': asset->url,
            'width': asset->metadata.dimensions.width,
            'height': asset->metadata.dimensions.height,
            'altText': asset->altText
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

export { fetchTeam, fetchNews, fetchPublications, fetchHome, fetchImprint };
