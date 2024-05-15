import esbuild from 'esbuild';
import config from '../../esbuild.config';

export default async function build() {
  const Value = 123;
  return await esbuild.build(config);
}
