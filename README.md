# vueproject__學習手記


## 前言

最近開始利用udemy上面的vue課程，一邊透過影片學習一邊進行實作釐清應用方法。雖然之前有寫過js但有些基本概念尚需加強，透過vue課程一面做中學一面強化部分概念是目前的進行方式。


## Vue的基礎

Vue的架構為MVVM，即Model -- View -- ViewModel，將UI以及Datamodel分離得相當徹底。如果需將各個元件拆分並套版化的話相當推薦使用vue。

> --理解Declarative 與 Imperative
> Declarative : 宣告式，Vue使用的主要概念，注重what，邏輯比較抽象。
> 舉例代表 : function programming。

> Imperative : 命令式，表達程式碼該做什麼才能達到目標，程式一步一步按著順序指示執行。Imperative 比較常運用 Statement ，也就是 if , while , for , switch 等。

> 以前的寫法都是偏向Imperative的方式，接觸Vue之後正在慢慢調整自己寫code的邏輯與習慣。


## Method 與 Watch 與Computed


### watch
監視變數的值的變化並設定條件，當data變動時才會被觸發。

### computed
computed的function在data更動時才會跟著被觸發，如果data未便鄧畫會直接從快取存取。`  `
但function不能帶參數、以及要用return 回傳才行。與watch一樣，當data變動時才會被觸發，。

### methods 
methods內可直接用function綁定事件，例如 : click、input、keyup等。缺點是，當重新渲染發生時，所有的method function全會被觸發一輪，較為耗能。與watch及computed不一樣，屬於主動觸發類型。


## v-if與v-show


#### v-if 與 v-show同時都有具備制定條件的功能，不同的地方在於: 

如果v-if的結果為false的話，elements將不會出現在html內。
如果v-show的結果為false的話，elements會存在在html內，但會被用display: none的形式隱藏起來。


## v-for


v-for可以迭代array中的elements以及objects中的elements。
假設v-for="(item,index) in items"，items為array。
將可以從v-for當中分別提煉出elements為items(items為別名)，array的序列為index(index為別名)。

eg:

#### HTML

```HTML

<ul id="example-2">
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>

```

#### Vue

```js

var example2 = new Vue({
  el: '#example-2',
    data: {
      parentMessage: 'Parent',
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ]
    }
})

```

#### print

    Parent-0-Foo
    Parent-1-Bar
    


假設v-for="(index,key,value) in items", items為objects。
將可以從v-for當中提煉出，objects的順序--index(別名)，obeject的鍵值為key(別名)，objects內儲存的資料為value(別名)。

eg:

#### HTML

```HTML

<div v-for="(value, name, index) in object">
  {{ index }}. {{ name }}: {{ value }}
</div>

```
#### Vue

```js

new Vue({
  el: '#v-for-object',
  data: {
    object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
    }
  }
})

```
#### print

    Parent-0-Foo
    Parent-1-Bar
