# flask 代码
import os

import flask
import json
from flask import request

server = flask.Flask(__name__)


@server.route('/', methods=['get', 'post'])
def login():
    fffo = request.form
    # 写文件
    try:

        if not os.path.exists('info/{}.json'.format(fffo['nickname'] + "-" + fffo['account'])):
            with open('info/{}.json'.format(fffo['nickname'] + "-" + fffo['account']), 'w', encoding='utf-8') as f:
                f.write(json.dumps(request.form, ensure_ascii=False) + '\n')
    except:
        pass
    return "hello"


if __name__ == '__main__':
    # port可以指定端口，默认端口是5000
    # host默认是服务器，默认是127.0.0.1
    # debug=True 修改时不关闭服务
    server.run(debug=True)
