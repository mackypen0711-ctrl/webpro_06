# タスクリスト（characters システム）

行う作業を整理するために，タスクリストを作成する．

## タスクリスト

- [ ] 開発者向けドキュメントの作業
  - [x] 対象とするシステムの決定（characters：キャラクター管理） :thinking:
  - [ ] データ構造の決定（id, name, description, imageURL など） :thinking:
  - [ ] ページ構造の検討（一覧・詳細・追加・編集） :thinking:
  - [ ] ページ遷移の検討 :thinking:
  - [ ] HTTPメソッドとリソース名の決定（/characters を中心に統一）
  - [ ] ページ遷移図の作成 :writing_hand:
  - [ ] ページ構造の決定
  - [ ] ドキュメントの構成の検討 :thinking:
  - [ ] 概要 :writing_hand:
  - [ ] HTTPメソッドとリソース名一覧 :writing_hand:
  - [ ] データ構造 :writing_hand:
  - [ ] リソース名ごとの機能の詳細 :writing_hand:

- [ ] 管理者向けドキュメントの構成
  - [ ] インストールから起動までの手順確認 :computer:
  - [ ] インストール方法 :writing_hand:
  - [ ] 起動方法 :writing_hand:
  - [ ] 起動できない場合 :writing_hand:
  - [ ] 終了方法 :writing_hand:
  - [ ] 分かっている不具合 :writing_hand:

- [ ] 利用者向けドキュメントの作業
  - [ ] 構成の検討 :thinking:
  - [ ] スクリーンショットの保存と整理 :computer:
  - [ ] 概要 :writing_hand:
  - [ ] 使用できる機能 :writing_hand:
  - [ ] 起動画面 :writing_hand:
  - [ ] 一覧表示 :writing_hand:
  - [ ] 詳細表示 :writing_hand:
  - [ ] データ追加 :writing_hand:
  - [ ] データ削除 :writing_hand:
  - [ ] データ編集 :writing_hand:

- [ ] 提出 :tada:

---

## Mermaid（ページ遷移の例）

mermaid
stateDiagram-v2
    [*] --> List
    List --> Detail : キャラクター名をクリック
    Detail --> Edit : 編集ボタン
    Edit --> List : 更新完了
    List --> Add : 追加ボタン
    Add --> List : 登録完了
    Detail --> Delete : 削除ボタン
    Delete --> List : 削除完了
