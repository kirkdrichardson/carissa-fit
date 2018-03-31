import { getStr, randomNum } from './../util/General';
/* eslint-disable import/prefer-default-export */
export const getBlogData = () => (
  {
    id: randomNum(9000),
    imgSrc: 'https://picsum.photos/200/300',
    title: getStr(4),
    previewText: getStr(30),
    fullText: getStr(500),
    authorFirstName: 'Carissa',
    authorLastName: 'Richardson',
    created: new Date(),
    updated: null,
    deleted: null
  }
);
