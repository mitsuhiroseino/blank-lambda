import esbuild from 'esbuild';
import config from '../../esbuild.config';

export default async function build() {
  return await esbuild.build(config);
}
