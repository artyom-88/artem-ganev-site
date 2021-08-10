import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import PageContainer from 'components/Pages/PageContainer';
import { useBlogItems } from 'components/Pages/Pages.hooks';
import { BLANK, BLOG, REL } from 'const';
import { BlogModel } from 'model';
import { ReactElement } from 'react';
import useStyles from './Blog.styles';

const Blog = (): ReactElement => {
  const classes = useStyles();
  const items: BlogModel[] = useBlogItems();
  return (
    <PageContainer title={BLOG.name} Icon={BLOG.Icon}>
      <Box display='flex' flexDirection='column'>
        {items.map((item: BlogModel) => {
          const { id, title, link, linkCaption } = item;
          // TODO: move to separate component
          return (
            <Box key={id} mb={2}>
              <Card raised>
                <Box p={2} flexGrow={1}>
                  <Typography variant='h5' paragraph className={classes.blogListDate}>
                    {item.formatDate()}
                  </Typography>
                  <Typography variant='h6' paragraph>
                    {title}
                  </Typography>
                  {link && (
                    <Box display='flex'>
                      <a href={link} target={BLANK} rel={REL} title='Click for details'>
                        <Typography variant='h6' paragraph>
                          {linkCaption}
                        </Typography>
                      </a>
                    </Box>
                  )}
                </Box>
              </Card>
            </Box>
          );
        })}
      </Box>
    </PageContainer>
  );
};

export default Blog;
