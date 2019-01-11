import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtButton } from 'taro-ui'

//taro派生类
class Index extends Taro.Component {
//设置导航栏名称
  config = {
    navigationBarTitleText: '发现页'
  }
//管理tab页的值
  tabHandler = (value) => {
    this.setState({
      currentTab: value
    })
  }	
	//设置返回按钮
  backButtonHandler = () => {
    Taro.navigateBack()
  }
//设置tab页的打底菜单栏
  render() {
    const { currentTab } = this.state;
    const tabList = [
      { title: '标签页1' },
      { title: '标签页2' },
      { title: '标签页3' },
    ]
//返回参数
    return (
      <View>
        <AtTabs
          current={currentTab}
          tabList={tabList}
          onClick={this.tabHandler}
        >
          <AtTabsPane current={currentTab} index={0} >
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>
              <AtButton type='secondary' onClick={this.backButtonHandler}>
                回到 TabBar 页并关闭本页
              </AtButton>
            </View>
          </AtTabsPane>
          <AtTabsPane current={currentTab} index={1}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>
              标签页二的内容
            </View>
          </AtTabsPane>
          <AtTabsPane current={currentTab} index={2}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>
              标签页三的内容
            </View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
//输出默认值
export default Index
