// 引入 Count 的UI组件
import CountUI from '../../components/Count'
// 引入 connect 用于连接UI组件与redux
import { connect } from 'react-redux'
// 引入action
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'


// mapStateToProps函数返回的是一个对象: key就作为传递给UI组件props的key,value就作为传递给UI组件props的value--状态
function mapStateToProps(state) {
    return { count: state }
}

// mapDispatchToProps函数返回地对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value--操作状态的方法
function mapDispatchToProps(dispatch) {
    return {
        jia: (value) => {
            // 通知redux执行加法
            dispatch(createIncrementAction(value))
        },
        jian: (value) => {
            dispatch(createDecrementAction(value))
        },
        jiaAsync: (value, time) => {
            dispatch(createIncrementAsyncAction(value, time))
        }
    }
}

// 创建并暴露一个Count的容器组件
// export default CountContainer = connect()(CountUI)
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
