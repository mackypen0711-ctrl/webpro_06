# 開発者用仕様書

## 概要
characters は、キャラクター情報（名前・説明・画像URL）を登録・閲覧・編集・削除できる Web アプリケーションである。  
HTML ベースの画面遷移と、JSON を返す REST API の両方を提供する。  
データはメモリ内配列で管理し、サーバ再起動時に初期化される。

## システム構成
- フレームワーク：JavaScript（バニラ）
- ビュー：HTML（テンプレートエンジンなし）
- データ保存：メモリ内配列
- ポート：任意
- API：REST API（GET / POST / PUT / DELETE）

## データ構造

### Character オブジェクト
| プロパティ | 型 | 説明 |
|-----------|------|-------------------------|
| id | number | キャラクターID |
| name | string | キャラクター名（必須） |
| description | string | 説明 |
| imageURL | string | 画像URL |
| createdAt | Date | 作成日時 |
| updatedAt | Date | 更新日時 |

---

## HTTPメソッドとリソース名一覧

### HTML 画面用
| メソッド | パス | 機能 |
|---------|----------------------------|----------------|
| GET | / | 一覧へリダイレクト |
| GET | /characters | キャラクター一覧表示 |
| GET | /characters/new | 新規作成フォーム |
| POST | /characters | キャラクター作成 |
| GET | /characters/:id | 詳細ページ |
| GET | /characters/:id/edit | 編集フォーム |
| POST | /characters/:id/update | 更新処理 |
| POST | /characters/:id/delete | 削除処理 |

### REST API（JSON）
| メソッド | パス | 機能 |
|---------|----------------------------|------------------------|
| GET | /api/characters | 一覧取得 |
| GET | /api/characters/:id | 詳細取得 |
| POST | /api/characters | 新規作成 |
| PUT | /api/characters/:id | 更新 |
| DELETE | /api/characters/:id | 削除 |

---

## ページ遷移図

mermaid
stateDiagram-v2
    [*] --> 一覧
    一覧 --> 詳細 : キャラクター名クリック
    一覧 --> 新規作成フォーム : 新規作成
    新規作成フォーム --> 一覧 : 作成完了
    詳細 --> 編集フォーム : 編集
    編集フォーム --> 詳細 : 更新完了
    詳細 --> 一覧 : 削除
    詳細 --> 一覧 : 戻る

---

## 各機能の詳細

### 一覧表示（GET /characters）
- 全キャラクターを表示
- 名前クリックで詳細画面へ
- 新規作成ボタンあり

### 新規作成（GET /characters/new → POST /characters）
入力項目：
- name（必須）
- description（任意）
- imageURL（任意）

登録後一覧へ戻る。

### 詳細表示（GET /characters/:id）
- 名前、説明、画像を表示
- 編集・削除ボタン設置
- 存在しないIDは404

### 編集（GET /characters/:id/edit → POST /characters/:id/update）
- 既存値をフォームへ反映
- 保存後詳細ページへ戻る

### 削除（POST /characters/:id/delete）
- 削除後一覧へ戻る

---

## ファイル構成例

characters-app/
├── index.js
├── public/
│   └── css/
│       └── style.css
└── views/
    └── characters/
        ├── index.html
        ├── show.html
        ├── new.html
        └── edit.html

---

## エラーハンドリング

| 状況 | ステータス | 説明 |
|------|-----------|---------|
| ID が存在しない | 404 | 該当データなし |
| name が空 | 400 | バリデーションエラー |
| 不正パス | 404 | 存在しないURL |

---

以上が開発者用仕様書である。