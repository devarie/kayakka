import React from 'react'
import { ImageList, ImageListItem, makeStyles } from '@material-ui/core'
import tileData from './TileData'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 'sm',
    height: 'sm',
  },
}))

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function ImageGridList() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ImageList cellHeight={320} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <ImageListItem key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
}
