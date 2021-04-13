    BFC 即 Block Formatting Contexts (块级格式化上下文) 页面中的一块渲染区域，
    并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。
    具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，
    并且 BFC 具有普通容器所没有的一些特性。
    只要元素满足下面任一条件即可触发 BFC 特性：
        float 除 none 以外的值
        position 为 absolute、fixed
        display 为 inline-block、table-cells、flex
        overflow 为 hidden、auto、scroll
    放在body下