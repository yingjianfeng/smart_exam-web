<template>
    <el-container>
        <el-header>Header</el-header>
        <el-container>
            <el-aside width="200px">
                <el-menu
                        default-active="1"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                        router
                >
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </template>
                        <el-submenu index="/index">
                            <template slot="title">部门员工管理</template>
                            <el-menu-item index="/index/dept">
                                <i class="el-icon-location"></i>
                                <span>部门信息管理</span>
                            </el-menu-item>
                            <el-menu-item index="/index/emp">
                                <i class="el-icon-location"></i>
                                <span>员工信息管理</span>
                            </el-menu-item>
                        </el-submenu>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
<style>
    .el-header{
        background-color: #545c64;
    }
    .el-aside {
        background-color: #545c64;
    }

    .el-main {
        background-color: #E9EEF3;
    }
    .el-container {
        height: 700px;
    }
</style>