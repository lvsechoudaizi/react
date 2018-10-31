/* eslint-disable */
const isProduction = process.env.NODE_ENV === 'production'
const env = process.env.NODE_ENV

const BASIC_OP = {
  edit: 'edit',
  add: 'add',
  delete: 'delete',
  preview: 'preview',
}

export const BASIC_OP_SHOW = {
  edit: '编辑',
  add: '创建',
  delete: '删除',
  preview: '预览',
}

const LEGEND = {
  realTimeShareCount: {
    color: '#1f6ddc',
    label: '实时共享',
  },
  fileShareCount: {
    color: '#33b66a',
    label: '文件共享',
  },
  noAccessCount: {
    color: '#aeaeae',
    label: '未接入',
  },
}

export const LINK = {
  HOME: '/',
  LOGIN: '/login',
  SYSTEM_MANAGEMENT: {
    DYNAMIC: '/system/dynamic',
    RESOURCE_DIRECTORY: '/system/resource/directory',
    RESOURCE_AUDIT: '/system/resource/audit',
    USER_MANAGE: '/system/user-manage/user',
    ROLE_MANAGE: '/system/user-manage/role',
    CONTENT_MANAGE: '/system/contentManage/news',
    MESSAGE_CONFIG: '/system/contentManage/message-config',
    DEPARTMENT: '/system/department',
    ORGANIZATION: '/system/organization',

    MESSAGE_WRITE: '/system/messageCenter/write',
    MESSAGE_INBOX: '/system/messageCenter/inbox',
    MESSAGE_OUTBOX: '/system/messageCenter/outbox',
    MESSAGE_DETAIL: '/system/messageCenter/detail',

    APPLY_AUDIT: '/system/apply/audit',
    MY_APPLY: '/system/myCenter/myApply',
    MY_MESSAGE: '/system/myCenter/myMessage'
  },
  DIRECTORY: '/directory',
  ITEM_PREVIEW: '/directory/preview',

  SHARE_EXCHANGE: '/share-exchange',
  DIRECTORY_EDIT: '/directory-edit',
  ITEM_EDIT: '/item-edit',
}

export const SIZE_UNIT = {
  0: 'B',
  1: 'KB',
  2: 'MB',
  3: 'GB',
  4: 'TB',
}

export const REGEX = {
  PATH: /(\/(\w+))*/,
  NUMBER: /^\d{1,3}$/,
  PHONE: /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[03,5-9]))\d{8}$/,
  LOGIN_NAME: /^([a-zA-Z])[\w\p{S}]*/,
  LABEL: /^[a-zA-Z\d\u4e00-\u9fa5]+$/, // 中文+英文+数字
  IP: /^((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d)(\.((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d)){3}$/,
  EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  ID_CARD:  /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^((1[1-5])|(2[1-3])|(3[1-7])|(4[1-6])|(5[0-4])|(6[1-5])|71|(8[12])|91)\d{4}((19\d{2}(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(19\d{2}(0[13578]|1[02])31)|(19\d{2}02(0[1-9]|1\d|2[0-8]))|(19([13579][26]|[2468][048]|0[48])0229))((\d{4})|\d{3}[Xx])$)$/,
  PASSWORD: /^[0-9a-zA-Z]{6,20}$/,
  FIXPHONE: /0\d{2,3}-\d{7,8}/,
}

const FORM_LAYOUT = {
  base: {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  },
  inner: {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 18 },
    },
  },
  progress: {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 2 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
    },
  },
  detail: {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 2 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
  },
  detailWithoutLabel: {
    wrapperCol: {
      offset: 2,
      span: 8,
    },
  },
  login: {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 15,
    }
  }
}

export const COLOR_SET = ['#009AF2', '#88ca39', '#ea894f', '#ff9561', '#a38cf8', '#ff9561', '#cf92ef', '#8cb0ea', '#fe82b4']

export const DATE_TIME_FORMATTER = {
  YMD_HMS: 'YYYY-MM-DD HH:mm:SS',
  YMD: 'YYYY-MM-DD',
  START_TIME: 'YYYY-MM-DD 00:00:00',
  END_TIME: 'YYYY-MM-DD 23:59:59',
  MONTH: 'YYYY年MM月',
  DATE: 'YYYY年MM月DD日',
}

/* Model */
const DIRECTORY = {
  menuType: {
    resourceDirectory: 1,
    informationQuery: 2,
    shareExchange: 3,
    systemManagement: 4,
  }
}

const ITEM = {
  format_classify: {
    eFile: 1,
    eSheet: 2,
    database: 3,
    image: 4,
    streamMedia: 5,
  },
  format_type: {
    other: 0,
    ofd: 101,
    wps: 102,
    xml: 103,
    txt: 104,
    doc: 105,
    docx: 106,
    html: 107,
    pdf: 108,
    ppt: 109,
    et: 201,
    xls: 202,
    xlsx: 203,
    dm: 301,
    kingbaseES: 302,
    access: 303,
    dbf: 304,
    base: 305,
    sybase: 306,
    oracle: 307,
    sqlServer: 308,
    db2: 309,
    jpg: 401,
    gif: 402,
    bmp: 403,
    swf: 501,
    rm: 502,
    mpg: 503,
  },
  SHARE_TYPE: {
    UNLIMITED: 1,
    LIMITED: 2,
    FORBID: 3,
  },
  SHARE_MODE: {
    FILE: 1,
    DATABASE: 2,
    INTERFACE: 3,
  },
  access_status: {
    accessed: 1, // 已接入
    unaccessed: 0, // 未接入
  },
  field_apply_status: {
    not_apply: 0, // 未申请
    applying: 1, // 申请中
    applied: 2, // 已申请
  },
  UPDATE_PERIOD: {},
  DATA_TYPE: {
    char: 1,
    numeric: 2,
    currency: 3,
    date: 4,
    datetime: 5,
    logical: 6,
    memo: 7,
    general: 8,
    double: 9,
    integer: 10,
    float: 11,
  },
  audit_status: {
    reviewing: 0,
    approved: 1,
    rejected: 2,
    canceled: 3,
  },
  open_type: {
    disable: 0,
    enable: 1,
  },
  release_status: {
    unreleased: 0,
    released: 1,
  }
}

const ITEM_SHOW = {
  format_classify: {
    1: {
      label: '电子文件'
    },
    2: {
      label: '电子表格'
    },
    3: {
      label: '数据库'
    },
    4: {
      label: '图形图像'
    },
    5: {
      label: '流媒体',
    }
  },
  format_type: {
    0: {
      label: '其他',
    },
    1: {
      101: {
        label: 'OFD',
      },
      102: {
        label: 'wps',
      },
      103: {
        label: 'xml',
      },
      104: {
        label: 'txt',
      },
      105: {
        label: 'doc',
      },
      106: {
        label: 'docx',
      },
      107: {
        label: 'html',
      },
      108: {
        label: 'pdf',
      },
      109: {
        label: 'ppt',
      },
    },
    2: {
      201: {
        label: 'et'
      },
      202: {
        label: 'xls'
      },
      203: {
        label: 'xlsx'
      },
    },
    3: {
      301: {
        label: 'Dm'
      },
      302: {
        label: 'KingbaseES'
      },
      303: {
        label: 'access'
      },
      304: {
        label: 'dbf'
      },
      305: {
        label: 'base'
      },
      306: {
        label: 'sybase'
      },
      307: {
        label: 'oracle'
      },
      308: {
        label: 'sql_server'
      },
      309: {
        label: 'db2'
      },
    },
    4: {
      401: {
        label: 'jpg',
      },
      402: {
        label: 'gif',
      },
      403: {
        label: 'bmp',
      },
    },
    5: {
      501: {
        label: 'swf'
      },
      502: {
        label: 'rm'
      },
      503: {
        label: 'mpg'
      },
    }
  },
  open_type: {
    0: {
      label: '否',
    },
    1: {
      label: '是',
    }
  },
  share_mode_classify: {
    1: {
      label: '共享平台方式',
    }
  },
  status: {
    0: {
      label: '无效',
    },
    1: {
      label: '有效',
    }
  },
  access_status: {
    0: {
      label: '未接入',
    },
    1: {
      label: '已接入',
    },
  },
  SHARE_TYPE: {
    1: {
      label: '无条件共享',
    },
    2: {
      label: '有条件共享',
    },
    3: {
      label: '不予共享',
    },
  },
  SHARE_MODE: {
    1: {
      label: '文件',
    },
    2: {
      label: '数据库',
    },
    3: {
      label: '接口',
    },
  },
  UPDATE_PERIOD: {
    1: {
      label: '实时',
    },
    2: {
      label: '每日',
    },
    3: {
      label: '每周',
    },
    4: {
      label: '每月',
    },
    5: {
      label: '每季度',
    },
    6: {
      label: '每年',
    },
    7: {
      label: '不定期',
    }
  },
  DATE_TYPE: {
    1: {
      label: '字符型C',
      needLength: true,
    },
    2: {
      label: '数值型N',
      needLength: false,
    },
    3: {
      label: '货币型Y',
      needLength: false,
    },
    4: {
      label: '日期型D',
      needLength: false,
    },
    5: {
      label: '日期时间型T',
      needLength: false,
    },
    6: {
      label: '逻辑型L',
      needLength: false,
    },
    7: {
      label: '备注型M',
      needLength: false,
    },
    8: {
      label: '通用型G',
      needLength: false,
    },
    9: {
      label: '双精度型B',
      needLength: false,
    },
    10: {
      label: '整型I',
      needLength: false,
    },
    11: {
      label: '浮点型F',
      needLength: false,
    },
  },
  audit_status: {
    0: {
      label: '待审核',
      color: 'orange',
    },
    1: {
      label: '审核通过',
      color: 'green',
    },
    2: {
      label: '审核驳回 ',
      color: 'red',
    },
    3: {
      label: '已撤销 ',
      color: 'gray',
    },
  },
  release_status: {
    0: {
      label: '未发布',
    },
    1: {
      label: '已发布',
    }
  },
  field_apply_status: {
    0: {
      label: '未申请',
    },
    1: {
      label: '申请中',
      color: 'orange'
    },
    2: {
      label: '已申请',
      color: 'blue',
    },
  },
}

const USER = {
  status: {
    disabled: 0,
    enabled: 1,
    deleted: 2,
  }
}

const USER_SHOW = {
  status: {
    0: {
      label: '禁用',
    },
    1: {
      label: '启用',
    },
    2: {
      label: '注销',
    }
  }
}

const APPLY = {
  is_system_construction: {
    yes: 1,
    no: 0,
  }
}

const APPLY_SHOW = {
  is_system_construction: {
    0: {
      label: '否',
    },
    1: {
      label: '是',
    }
  }
}

const AUDIT = {
  status: {
    reviewing: 0,
    approved: 1,
    rejected: 2,
    canceled: 3,
  }
}

const AUDIT_SHOW = {
  type: {
    1: {
      label: '新增',
    },
    2: {
      label: '修改',
    },
  },
  status: {
    0: {
      label: '待审核',
    },
    1: {
      label: '审核通过',
    },
    2: {
      label: '审核驳回'
    },
    3: {
      label: '已撤销'
    }
  }
}

const ROLE = {
  status: {
    disabled: 0,
    enabled: 1,
  }
}

const ROLE_SHOW = {
  status: {
    1: {
      label: '启用',
    },
    0: {
      label: '禁用',
    },
  }
}

const MESSAGE = {
  type: {
    inbox: 'receive',
    outbox: 'send',
  },
  receiver_type: {
    organization: 1,
    department: 2,
    user: 3,
  },
  status: {
    unread: 0,
    read: 1,
  },
  CONFIG: {
    enable: 1,
    disable: 0,
  },

}

const MESSAGE_SHOW = {
  status: {
    0: {
      label: '未读',
    },
    1: {
      label: '已读',
    },
  },
  config_status: {
    0: {
      label: '否',
      color: 'red',
    },
    1: {
      label: '是',
      color: 'blue',
    },
  }
}

const Branch_SHOW = {
  status: {
    0: '区发改委'
  }
}

export {
  isProduction,
  env,
  LEGEND,
  FORM_LAYOUT,
  //
  DIRECTORY,
  ITEM,
  ITEM_SHOW,
  USER,
  USER_SHOW,
  ROLE,
  ROLE_SHOW,
  AUDIT,
  AUDIT_SHOW,
  APPLY,
  APPLY_SHOW,
  MESSAGE,
  MESSAGE_SHOW,
  Branch_SHOW,
  //
  BASIC_OP,
}
