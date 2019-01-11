import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import Counter from './Counter'
import Profile from './Profile';
import TabBar from './TabBar';

import './index.scss'


@inject('TabBarStore')
@observer
//派生类
class Index extends Component {
  //配置导航栏标题
  config = {
    navigationBarTitleText: 'ARBook'
  }
//提供一个渲染前调用方法的环境
  componentWillMount() { }

  componentWillReact() {
    console.log('componentWillReact')
  }
//提供一个渲染后调用方法的环境
  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
//渲染
  render() {
    const { TabBarStore: { currentTab } } = this.props;
    let content;
    switch (currentTab) {
      case 1: {
        content = <Profile />;

        break;
      }
    
      default: {
        content = <Counter />;

        break;
      }
    }
//返回参数
    return (
      <View className='index'>
        {content}
        <TabBar />
      </View>
    );
  }
}
//输出默认值
export default Index
