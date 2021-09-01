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

watch : 監視變數的值的變化並設定條件，當data變動時才會被觸發。

computed : computed的function在data更動時才會跟著被觸發，如果data未便鄧畫會直接從快取存取。但function不能帶參數、以及要用return 回傳才行。與watch一樣，當data變動時才會被觸發，。

methods : methods內可直接用function綁定事件，例如 : click、input、keyup等。缺點是，當重新渲染發生時，所有的method function全會被觸發一輪，較為耗能。與watch及computed不一樣，屬於主動觸發類型。

