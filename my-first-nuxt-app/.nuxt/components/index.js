export { default as PostPreview } from '../../components/Posts/PostPreview.vue'

export const LazyPostPreview = import('../../components/Posts/PostPreview.vue' /* webpackChunkName: "components/Posts/PostPreview" */).then(c => c.default || c)
