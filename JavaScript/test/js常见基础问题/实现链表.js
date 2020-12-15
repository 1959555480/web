// 实现一个单链表
/**
 * 链表：链表是由一组节点组成的集合，每个节点都能使用一个对象的引用指向它的后继。指向另一个节点的引用叫做链
 * 设计两个类，Node类表示节点，LinkedList类提供节点的增删改查以及其他方法
 */

function Node(item) {
  this.element = item//当前节点数据
  this.next = null//下一个节点数据
}
function LinkedList() {
  this.head = new Node('head')//头节点
}
LinkedList.prototype = {
  // 查找某一节点
  find: function (item) {
    let currNode = this.head
    while (currNode.element != item) {
      currNode = currNode.next
    }
    return currNode
  },
  // 向某一元素节点后面插入新节点
  insert: function (newElement, item) {
    let newNode = new Node(newElement)
    let current = this.find(item)
    newNode.next = current.next//先把被插入元素的next给新的 在把新的值接上被插入元素的next
    current.next = newNode
  },
  // 查找某一个节点的前一个节点
  findPrevious: function (item) {
    let currentNode = this.head
    while ((currentNode.next.element != item) && (currentNode.next != null)) {
      // 不相等 继续找
      currentNode = currentNode.next
    }
    return currentNode
  },
  // 删除某一个节点
  remove: function (item) {
    let preNode = this.findPrevious(item)
    if (preNode.next != null) {
      preNode.next = preNode.next.next
    }
  },
  //修改某一个节点的数据
  edit: function (item, newValue) {
    let currNode = this.find(item)
    currNode.element = newValue
  }
}
var c = new LinkedList()
c.insert('body', 'head')
c.insert('foot', 'body')
c.remove('body')
c.edit("foot", 'yyx')
// c.findPrevious('body')
console.log("111", c)
console.log("111", c.find('head'))