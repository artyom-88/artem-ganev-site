import { JSX } from 'react';

import Col from 'antd/es/col';
import Row from 'antd/es/row';
import Space from 'antd/es/space';
import Tooltip from 'antd/es/tooltip';
import Typography from 'antd/es/typography';

import { BLANK, REL } from 'common/constants/html-constants';
import { BlogItemProps } from 'features/blog/blog-types';

const gutter = 16;

const BlogItem = ({ item }: BlogItemProps): JSX.Element => {
  const { _id: id, date, link, linkCaption, title } = item;
  return (
    <Row key={id} gutter={gutter} wrap={false}>
      <Col span={4}>
        <Typography.Text strong>{date.format('MMMM Do, YYYY')}</Typography.Text>
      </Col>
      <Col flex='auto'>
        <Space direction='vertical' wrap>
          <div>{title}</div>
          {link && (
            <Tooltip title='Click for details'>
              <a href={link} target={BLANK} rel={REL}>
                <span>{linkCaption}</span>
              </a>
            </Tooltip>
          )}
        </Space>
      </Col>
    </Row>
  );
};

export default BlogItem;
