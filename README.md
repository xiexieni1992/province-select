# 省-市-区三级联动城市选择器
---------
## 本地运行 ##
`
    npm install
    npm run dev
`
## 安装 ##
npm安装或者cnpm：

        npm install province-selector --save
        
## 使用 ##
        
        import PsCity from 'province-selector';
    
        var City = new PsCity();    // 创建实例化对象
        City.show();    // 执行show方法
## confirm ##
回调函数，可以在里面拿到选中的地区

        import PsCity from 'province-selector';
        var City = new PsCity({
            confirm: function (data) {
                console.log(data);  // data就是选中的地区，一个拼接好的字符串
            }
        });
        
        ----------
        如果你不想用回调的方式
        可以用`City.getSelect()`方法直接获取当前选中的地区

## 数据回填 ##
如果你已经有了数据，想要回填进去，可以加一个`data`参数，但是要注意它的格式
 
        import PsCity from 'province-selector';
        var City = new PsCity({
            data: {
                province: ' 广东省',
                city    : '深圳市',
                district: '南山区',
            }
        });
        
        注意：键要相同，值要完整，省、市、区这几个字不要省略
## 参数 ##
| 参数          |     类型  |   说明                        |  默认值 |
| :--------:    | :-----:   | :----:                        | :----:  |
| data          | Object    | 需要回填的数据                |   空    |
| confirm       | Function  | 触发确定按钮，返回选中的地区  |   空    |
| cancel        | Function  | 触发取消按钮，没有返回值      |   空    |

## API ##

 1. `show()`，打开选择器
 2. `close()`，关闭选择器
 3. `getSelect()`，获取当前选中的区域，已拼接成了一个字符串
 4. `getSelectObj()`，获取当前选中的区域，返回的是一个对象
