import * as React from 'react';
import Image from 'next/image'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';

export default function TitleBarImageList() {
  return (
    <ImageList
      sx={{ width: 600, height: 600 }}
      cols={3}
      rowHeight={200}
      className="image-list"
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <Image
            src={`${item.img}?w=200&h=200&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            height={200}
            width={200}
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: '/team01.jpg',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: '/team02.jpg',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: '/team03.jpg',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: '/team04.jpg',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: '/team05.jpg',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: '/team06.jpg',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
];