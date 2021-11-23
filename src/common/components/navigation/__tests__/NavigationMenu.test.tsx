import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NavigationMenu from 'common/components/navigation/NavigationMenu';
import NavigationMenuItem from 'common/components/navigation/NavigationMenuItem';
import { PAGES_LIST_META } from 'common/const/pages.const';
import { shallow } from 'enzyme';

describe('NavigationMenu', () => {
  const wrapper = shallow(<NavigationMenu />);

  it('Should render Container', () => {
    const container = wrapper.find(Container);
    expect(container).toHaveLength(1);
    expect(container.prop('component')).toEqual('nav');
  });

  it('Should render Button', () => {
    const button = wrapper.find(Button);
    expect(button).toHaveLength(1);
  });

  it('Should render Menu', () => {
    const menu = wrapper.find(Menu);
    expect(menu).toHaveLength(1);
    expect(menu.prop('anchorEl')).toBeNull();
    expect(menu.prop('open')).toBeFalsy();
  });

  it('Should render MenuItem', () => {
    expect(wrapper.find(MenuItem)).toHaveLength(PAGES_LIST_META.length);
  });

  it('Should render NavigationMenuItem', () => {
    expect(wrapper.find(NavigationMenuItem)).toHaveLength(PAGES_LIST_META.length);
  });

  it('Should open and close menu', () => {
    const button = wrapper.find(Button);
    const currentTarget = document.createElement('div');
    button.simulate('click', { currentTarget });

    let menu = wrapper.find(Menu);
    expect(menu.prop('anchorEl')).toEqual(currentTarget);
    expect(menu.prop('open')).toBeTruthy();

    menu.simulate('close');
    menu = wrapper.find(Menu);
    expect(menu.prop('anchorEl')).toBeNull();
    expect(menu.prop('open')).toBeFalsy();
  });
});
