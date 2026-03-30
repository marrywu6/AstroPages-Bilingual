// @ts-check
/// <reference types="astro/client" />
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage:
    process.env.NODE_ENV === 'production' || import.meta.env?.PROD
      ? {
          kind: 'github',
          repo: 'marrywu6/AstroPages-Bilingual',
        }
      : {
          kind: 'local',
        },
  collections: {
    posts_zh: collection({
      label: '中文博客',
      slugField: 'title',
      path: 'src/data/blog/zh/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: '标题' } }),
        pubDatetime: fields.date({ label: '发布时间' }),
        description: fields.text({ label: '摘要', multiline: true }),
        draft: fields.checkbox({ label: '草稿', defaultValue: false }),
        featured: fields.checkbox({ label: '推荐文章', defaultValue: false }),
        tags: fields.array(
          fields.text({ label: '标签' }),
          { 
            label: '标签',
            itemLabel: props => props.value
          }
        ),
        coverImage: fields.image({
        label: '封面图片',
        
        // 1. 物理保存路径：存入与 slug 同名的文件夹下的 content 目录
        // 星号 (*) 会被 Keystatic 自动替换为当前文章的 slug (如 astro-pages-bilingual)
        directory: 'src/data/blog/zh/*/content', 
        
        // 2. 写入 Markdown 的路径：生成相对路径
        // 同样使用 * 占位符，生成 ./astro-pages-bilingual/content/ 的前缀
        publicPath: './*/content/', 
      }),
        content: fields.markdoc({ 
          label: '正文',
          extension: 'md'
        }),
      },
    }),
    posts_en: collection({
      label: 'English Posts',
      slugField: 'title',
      path: 'src/data/blog/en/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        pubDatetime: fields.date({ label: 'Publish Date' }),
        description: fields.text({ label: 'Description', multiline: true }),
        draft: fields.checkbox({ label: 'Draft', defaultValue: false }),
        featured: fields.checkbox({ label: 'Featured', defaultValue: false }),
        tags: fields.array(
          fields.text({ label: 'Tags' }),
          { 
            label: 'Tags',
            itemLabel: props => props.value
          }
        ),
        content: fields.markdoc({ 
          label: 'Content',
          extension: 'md'
        }),
        coverImage: fields.image({
        label: '封面图片',
        
        // 1. 物理保存路径：存入与 slug 同名的文件夹下的 content 目录
        // 星号 (*) 会被 Keystatic 自动替换为当前文章的 slug (如 astro-pages-bilingual)
        directory: 'src/data/blog/zh/*/content', 
        
        // 2. 写入 Markdown 的路径：生成相对路径
        // 同样使用 * 占位符，生成 ./astro-pages-bilingual/content/ 的前缀
        publicPath: './*/content/', 
      }),
      },
    }),
  },
});
