CREATE TABLE  `user`(
    `id` int unsigned NOT NULL AUTO_INCREMENT,
    `username` varchar(32) NOT NULL DEFAULT '' COMMENT '用户名',
    `password` varchar(128) NOT NULL COMMENT '密码',
    `avatar` varchar(128) NOT NULL DEFAULT '' COMMENT '头像地址',
    `gender` tinyint(1) NOT NULL DEFAULT 1 COMMENT '性别：1.男 2.女',
    `phone` varchar(11) NOT NULL DEFAULT '' COMMENT '手机号',
    `email` varchar(64) COMMENT '邮箱',
    `address` varchar(64) COMMENT '地址',
    `hobbies` varchar(128) COMMENT '爱好',
    `deleted` tinyint(1) NOT NULL DEFAULT 0 COMMENT '是否注销',
    `created_at` datetime DEFAULT CURRENT_TIMESTAMP   COMMENT '创建时间',
    `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    PRIMARY KEY(`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='用户表';