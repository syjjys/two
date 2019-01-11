import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtButton, AtIcon } from 'taro-ui'

import './index.scss'

//派生类
@inject('CounterStore')
@observer
class Index extends Component {
//设置增加按钮
  incBtnHandler = () => {
    const { CounterStore } = this.props
    CounterStore.increase()

    // Taro.showToast({
    //   title: '成功',
    //   icon: 'loading',
    //   duration: 5000
    // }).then(res => console.log(res))
  }
//设置减少按钮
  decBtnHandler = () => {
    const { CounterStore } = this.props
    CounterStore.decrease()
  }

  asyncIncBtnHandler = () => {
    const { CounterStore } = this.props
    CounterStore.increaseAsync()
  }
//渲染
  render() {
    const { CounterStore: { count } } = this.props
//返回参数
    return (
      <View className='counter'>
        <View className='counter-value'>
          {count}
        </View>
        <View className='counter-btn-group'>
          <View className='counter-btn'>
            <AtButton type='primary' onClick={this.incBtnHandler}>
              <AtIcon value='add' />
            </AtButton>
          </View>
          <View className='counter-btn'>
            <AtButton type='secondary' onClick={this.decBtnHandler}>
              <AtIcon value='subtract' />
            </AtButton>
          </View>
        </View>
      </View>
    )
  }
}
//输出默认值
export default Index
