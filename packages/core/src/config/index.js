module.exports = {
  server: {
    enabled: true,
    port: 1181,
    intercepts: {
      'github.com': [
        {
          // "release archive 下载链接替换",
          regexp: [
            '/.*/.*/releases/download/',
            '/.*/.*/archive/'
          ],
          redirect: 'download.fastgit.org'
        },
        {
          regexp: [
            '/.*/.*/raw/',
            '/.*/.*/blame/'
          ],
          redirect: 'hub.fastgit.org'
        }
      ],
      // 'codeload.github.com': [
      //     {
      //         regexp: '.*',
      //         redirect:"download.fastgit.org"
      //     }
      // ],
      'raw.githubusercontent.com': [{ proxy: 'raw.fastgit.org' }],
      'github.githubassets.com': [
        {
          proxy: 'assets.fastgit.org'
        }
      ],
      'customer-stories-feed.github.com': [
        {
          proxy: 'customer-stories-feed.fastgit.org'
        }
      ],

      // google cdn
      'ajax.googleapis.com': [
        {
          proxy: 'ajax.loli.net',
          backup: ['ajax.proxy.ustclug.org'],
          case: 'ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js'
        }
      ],
      'fonts.googleapis.com': [
        {
          proxy: 'fonts.loli.net',
          backup: ['fonts.proxy.ustclug.org'],
          case: 'https://fonts.googleapis.com/css?family=Oswald'
        }
      ],
      'themes.googleapis.com': [
        {
          proxy: 'themes.loli.net',
          backup: ['themes.proxy.ustclug.org']
        }
      ],
      'themes.googleusercontent.com': [
        { proxy: 'google-themes.proxy.ustclug.org' }
      ],
      'www.google.com': [
        {
          regexp: '/recaptcha/.*',
          proxy: 'www.recaptcha.net'
        }
      ],
      'fonts.gstatic.com': [
        {
          proxy: 'fonts-gstatic.proxy.ustclug.org',
          backup: ['gstatic.loli.net']
        }
      ],
      'clients*.google.com': [{ abort: true }],
      'www.googleapis.com': [{ abort: true }],
      'lh*.googleusercontent.com': [{ abort: true }],
      // mapbox-node-binary.s3.amazonaws.com/sqlite3/v5.0.0/napi-v3-win32-x64.tar.gz
      '*.s3.amazonaws.com': [
        {
          regexp: '/sqlite3/.*',
          redirect: 'npm.taobao.org/mirrors'
        }
      ],
      'registry-1.docker.io': [{ proxy: 'docker.mirrors.ustc.edu.cn' }],
      'packages.elastic.co': [{ proxy: 'elastic.proxy.ustclug.org' }],
      'ppa.launchpad.net': [{ proxy: 'launchpad.proxy.ustclug.org' }],
      'archive.cloudera.com': [{ regexp: '/cdh5/.*', proxy: 'cloudera.proxy.ustclug.org' }],
      'downloads.lede-project.org': [{ proxy: 'lede.proxy.ustclug.org' }],
      'downloads.openwrt.org': [{ proxy: 'openwrt.proxy.ustclug.org' }],
      'secure.gravatar.com': [{ proxy: 'gravatar.proxy.ustclug.org' }]
    },
    dns: {
      providers: {
        aliyun: {
          type: 'https',
          server: 'dns.alidns.com/dns-query',
          cacheSize: 1000
        },
        usa: {
          type: 'https',
          server: 'cloudflare-dns.com/dns-query',
          cacheSize: 1000
        }
      },
      mapping: {
        // "解决push的时候需要输入密码的问题",
        'api.github.com': 'usa',
        'gist.github.com': 'usa'
        // "avatars*.githubusercontent.com": "usa"
      }
    }
  },
  proxy: {},
  plugin: {}
}